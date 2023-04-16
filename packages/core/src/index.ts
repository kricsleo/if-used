import { parse as acornParse, Options as AcornOptions } from 'acorn';
import { full as walkFull} from 'acorn-walk'
import fs from 'fs/promises'
import glob from 'fast-glob'
import caniuse from 'caniuse-api'
import memoize from 'lodash.memoize'
import type { Node } from 'estree'
import bcd, { CompatData } from '@mdn/browser-compat-data'

type Browserslist = string | string[]
type FileOptions = Pick<AcornOptions, 'ecmaVersion'> & {
  browserslist: Browserslist
}

// async function checkFile(path: string) {

// }

export async function checkFile(path: string | string[], options: FileOptions) {
  const absPaths = await glob(path, { absolute: true })
  const fileIncompatibleNodes = await Promise.all(absPaths.map(async absPath => {
    const str = await fs.readFile(absPath, { encoding: 'utf-8' })
    const ast = str2AST(str, options)
    const nodes = collectAPINodes(ast) as unknown as Node[]
    const nativeAPINodes = nodes.filter(node => isNativeAPINode(node))
    const incompatibleNodes = nativeAPINodes.filter(node => !checkAPI(
      formatAPIName(node), 
      options.browserslist
    ))
    return { nodes, incompatibleNodes}
  }))
  return fileIncompatibleNodes
}

// async function readFiles(...path: string[]) {
//   const files = await glob(path, { absolute: true })
//    fs.readFile()
// }

export function str2AST(str: string, options: AcornOptions) {
  const result = acornParse(str, options)
  return result
}

export function formatAPIName(node: Node): string {
  switch (node.type) {
    case 'Identifier': return node.name
    case 'MemberExpression': return formatAPIName(node.object) + '.' + formatAPIName(node.property)
    default: return ''
  }
}

export const checkAPI = memoize(
  (api: string, browserslist: Browserslist) => {
    // todo: filter only public api
    return caniuse.isSupported(api, browserslist)
  },
  (api, browserslist) => api + browserslist
)

function collectAPINodes(ast: acorn.Node) {
  const nodes: acorn.Node[] = []
  walkFull(ast, node => {
    nodes.push(node)
  })
  return nodes
}

export function isNativeAPINode(apiNode: Node) {
  if ( apiNode.type === 'MemberExpression' ) {
    const objectName = apiNode.object.name;
    const propertyName = apiNode.property.name;

    // 遍历兼容性数据中的所有 JavaScript 内置对象
    for (const nativeObjectName in bcd.javascript.classes) {
      if (nativeObjectName === objectName) {
        const nativeObjectData = bcd.javascript.classes[objectName];
        // 查找对象中的属性或方法
        if (nativeObjectData.prototype_methods[propertyName] || nativeObjectData.static_methods[propertyName]) {
          return true;
        }
      }
    }
  }
  return false;
}
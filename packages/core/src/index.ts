import acorn, { Options as AcornOptions,  } from 'acorn';
import walk from 'acorn-walk'
import fs from 'fs/promises'
import glob from 'fast-glob'
import caniuse from 'caniuse-api'
import memoize from 'lodash.memoize'
import type { Node } from 'estree'

type Browserslist = string | string[]
type FileOptions = Pick<AcornOptions, 'ecmaVersion'> & {
  browserslist: Browserslist
}

// async function checkFile(path: string) {

// }

async function checkFile(path: string | string[], options: FileOptions) {
  const absPaths = await glob(path, { absolute: true })
  const fileIncompatibleNodes = await Promise.all(absPaths.map(absPath => async () => {
    const str = await fs.readFile(absPath, { encoding: 'utf-8'})
    const ast = str2AST(str, options)
    const nodes = collectAPINodes(ast)
    const incompatibleNodes = nodes.filter(node => !checkAPI(
      formatAPINode(node as unknown as Node), 
      options.browserslist
    ))
    return incompatibleNodes
  }))
  return fileIncompatibleNodes
}

// async function readFiles(...path: string[]) {
//   const files = await glob(path, { absolute: true })
//    fs.readFile()
// }

function str2AST(str: string, options: AcornOptions) {
  const result = acorn.parse(str, options)
  return result
}

function formatAPINode(node: Node): string {
  switch (node.type) {
    case 'Identifier': return node.name
    case 'MemberExpression': return formatAPINode(node.object) + '.' + formatAPINode(node.property)
    default: return ''
  }
}

const checkAPI = memoize(
  (api: string, browserslist: Browserslist) => caniuse.isSupported(api, browserslist),
  (api, browserslist) => api + browserslist
)

function collectAPINodes(ast: acorn.Node) {
  const nodes: acorn.Node[] = []
  walk.simple(ast, {
    MemberExpression(node) {
      nodes.push(node)
    },
    Identifier(node) {
      nodes.push(node)
    }
  })
  return nodes
}
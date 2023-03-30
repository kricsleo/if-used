import acorn, { Options as AcornOptions } from 'acorn';
import walk from 'acorn-walk'
import fs from 'fs/promises'
import glob from 'fast-glob'

// async function checkFile(path: string) {

// }

async function checkFile(path: string | string[], options: Pick<AcornOptions, 'ecmaVersion'>) {
  const absPaths = await glob(path, { absolute: true })
  absPaths.forEach(absPath => async () => {
    const str = await fs.readFile(absPath, { encoding: 'utf-8'})
    const ast = str2AST(str, options)
    const api = collectAPI(ast)
  })
}

// async function readFiles(...path: string[]) {
//   const files = await glob(path, { absolute: true })
//    fs.readFile()
// }

function str2AST(str: string, options: AcornOptions) {
  const result = acorn.parse(str, options)
  return result
}

async function checkAPI(api: string) {
  
}

function collectAPI(ast: acorn.Node) {
  const api: acorn.Node[] = []
  walk.simple(ast, {
    MemberExpression(node) {
      api.push(node)
    },
    Identifier(node) {
      api.push(node)
    }
  })
  return api
}
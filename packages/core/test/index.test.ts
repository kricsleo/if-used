import { describe, expect, it } from 'vitest'
import { checkFile } from '../src'

describe('checkFile', () => {
  it('exported', async () => {
    const files = '/Users/shengfeng.xu/Documents/workspace/incompatible/playground/**/dist/index.js'
    const results = checkFile(files, { ecmaVersion: 2015, browserslist: 'Chrome 10' })
    await expect(results).resolves.toMatchInlineSnapshot(`
      [
        [],
      ]
    `)
  })
})

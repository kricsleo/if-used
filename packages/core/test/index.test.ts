import { describe, expect, it } from 'vitest'
import { checkFile } from '../src'

describe('checkFile', () => {
  it('exported', async () => {
    const files = '*/dist.js'
    const results = checkFile(files, { ecmaVersion: 2015, browserslist: 'Chrome 10' })
    await expect(results).resolves.toMatchInlineSnapshot(`
      [
        [Function],
      ]
    `)
  })
})

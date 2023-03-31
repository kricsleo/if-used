import { describe, expect, it } from 'vitest'
import { checkAPI, checkFile } from '../src'

const files = '*/examples/*.js'
const browserslist = 'Chrome 10'

describe('core', () => {

  it('checkFile', async () => {
    const results = checkFile(files, { ecmaVersion: 2015, browserslist: 'Chrome 10' })
    await expect(results).resolves.toMatchInlineSnapshot(`
      [
        [],
      ]
    `)
  })


  it('checkAPI', () => {
    const api = 'alert'
    expect(checkAPI(api, browserslist)).toMatchInlineSnapshot()
  })
})


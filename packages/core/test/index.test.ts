import { describe, expect, it } from 'vitest'
import { checkAPI, checkFile } from '../src'
import caniuse from 'caniuse-api'
import { features } from 'caniuse-lite'
import bcd from '@mdn/browser-compat-data'

const files = '*/examples/*.js'
const browserslist = 'Chrome 75'

describe('core', () => {

  it('caniuse', () => {
    expect(caniuse.find('alert')).toMatchInlineSnapshot('[]')
  })

  it('checkFile', async () => {
    const results = checkFile(files, { ecmaVersion: 2015, browserslist: 'Chrome 10' })
    await expect(results).resolves.toMatchInlineSnapshot(`
      [
        {
          "incompatibleNodes": [],
          "nodes": [
            Node {
              "end": 1,
              "name": "a",
              "start": 0,
              "type": "Identifier",
            },
            Node {
              "computed": false,
              "end": 3,
              "object": Node {
                "end": 1,
                "name": "a",
                "start": 0,
                "type": "Identifier",
              },
              "property": Node {
                "end": 3,
                "name": "b",
                "start": 2,
                "type": "Identifier",
              },
              "start": 0,
              "type": "MemberExpression",
            },
            Node {
              "computed": false,
              "end": 11,
              "object": Node {
                "computed": false,
                "end": 3,
                "object": Node {
                  "end": 1,
                  "name": "a",
                  "start": 0,
                  "type": "Identifier",
                },
                "property": Node {
                  "end": 3,
                  "name": "b",
                  "start": 2,
                  "type": "Identifier",
                },
                "start": 0,
                "type": "MemberExpression",
              },
              "property": Node {
                "end": 11,
                "name": "flatMap",
                "start": 4,
                "type": "Identifier",
              },
              "start": 0,
              "type": "MemberExpression",
            },
            Node {
              "arguments": [],
              "callee": Node {
                "computed": false,
                "end": 11,
                "object": Node {
                  "computed": false,
                  "end": 3,
                  "object": Node {
                    "end": 1,
                    "name": "a",
                    "start": 0,
                    "type": "Identifier",
                  },
                  "property": Node {
                    "end": 3,
                    "name": "b",
                    "start": 2,
                    "type": "Identifier",
                  },
                  "start": 0,
                  "type": "MemberExpression",
                },
                "property": Node {
                  "end": 11,
                  "name": "flatMap",
                  "start": 4,
                  "type": "Identifier",
                },
                "start": 0,
                "type": "MemberExpression",
              },
              "end": 13,
              "start": 0,
              "type": "CallExpression",
            },
            Node {
              "end": 13,
              "expression": Node {
                "arguments": [],
                "callee": Node {
                  "computed": false,
                  "end": 11,
                  "object": Node {
                    "computed": false,
                    "end": 3,
                    "object": Node {
                      "end": 1,
                      "name": "a",
                      "start": 0,
                      "type": "Identifier",
                    },
                    "property": Node {
                      "end": 3,
                      "name": "b",
                      "start": 2,
                      "type": "Identifier",
                    },
                    "start": 0,
                    "type": "MemberExpression",
                  },
                  "property": Node {
                    "end": 11,
                    "name": "flatMap",
                    "start": 4,
                    "type": "Identifier",
                  },
                  "start": 0,
                  "type": "MemberExpression",
                },
                "end": 13,
                "start": 0,
                "type": "CallExpression",
              },
              "start": 0,
              "type": "ExpressionStatement",
            },
            Node {
              "body": [
                Node {
                  "end": 13,
                  "expression": Node {
                    "arguments": [],
                    "callee": Node {
                      "computed": false,
                      "end": 11,
                      "object": Node {
                        "computed": false,
                        "end": 3,
                        "object": Node {
                          "end": 1,
                          "name": "a",
                          "start": 0,
                          "type": "Identifier",
                        },
                        "property": Node {
                          "end": 3,
                          "name": "b",
                          "start": 2,
                          "type": "Identifier",
                        },
                        "start": 0,
                        "type": "MemberExpression",
                      },
                      "property": Node {
                        "end": 11,
                        "name": "flatMap",
                        "start": 4,
                        "type": "Identifier",
                      },
                      "start": 0,
                      "type": "MemberExpression",
                    },
                    "end": 13,
                    "start": 0,
                    "type": "CallExpression",
                  },
                  "start": 0,
                  "type": "ExpressionStatement",
                },
              ],
              "end": 13,
              "sourceType": "script",
              "start": 0,
              "type": "Program",
            },
          ],
        },
      ]
    `)
  })


  // it('checkAPI', () => {
  //   // using featureID of caniuse
  //   const api = 'api.Window.alert'
  //   expect(checkAPI(api, browserslist)).toMatchInlineSnapshot('true')
  // })
})


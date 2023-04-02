import { describe, expect, it } from 'vitest'
import { checkAPI, checkFile } from '../src'

const files = '*/examples/*.js'
const browserslist = 'Chrome 75'

describe('core', () => {

  it('checkFile', async () => {
    const results = checkFile(files, { ecmaVersion: 2015, browserslist: 'Chrome 10' })
    await expect(results).resolves.toMatchInlineSnapshot(`
      [
        {
          "incompatibleNodes": [],
          "nodes": [
            Node {
              "end": 5,
              "name": "alert",
              "start": 0,
              "type": "Identifier",
            },
            Node {
              "end": 13,
              "raw": "'hello'",
              "start": 6,
              "type": "Literal",
              "value": "hello",
            },
            Node {
              "arguments": [
                Node {
                  "end": 13,
                  "raw": "'hello'",
                  "start": 6,
                  "type": "Literal",
                  "value": "hello",
                },
              ],
              "callee": Node {
                "end": 5,
                "name": "alert",
                "start": 0,
                "type": "Identifier",
              },
              "end": 14,
              "start": 0,
              "type": "CallExpression",
            },
            Node {
              "end": 41,
              "name": "alert",
              "start": 36,
              "type": "Identifier",
            },
            Node {
              "body": [],
              "end": 46,
              "start": 44,
              "type": "BlockStatement",
            },
            Node {
              "body": Node {
                "body": [],
                "end": 46,
                "start": 44,
                "type": "BlockStatement",
              },
              "end": 46,
              "expression": false,
              "generator": false,
              "id": Node {
                "end": 41,
                "name": "alert",
                "start": 36,
                "type": "Identifier",
              },
              "params": [],
              "start": 27,
              "type": "FunctionDeclaration",
            },
            Node {
              "end": 54,
              "name": "alert",
              "start": 49,
              "type": "Identifier",
            },
            Node {
              "end": 63,
              "raw": "'custom'",
              "start": 55,
              "type": "Literal",
              "value": "custom",
            },
            Node {
              "arguments": [
                Node {
                  "end": 63,
                  "raw": "'custom'",
                  "start": 55,
                  "type": "Literal",
                  "value": "custom",
                },
              ],
              "callee": Node {
                "end": 54,
                "name": "alert",
                "start": 49,
                "type": "Identifier",
              },
              "end": 64,
              "start": 49,
              "type": "CallExpression",
            },
            Node {
              "end": 64,
              "expression": Node {
                "arguments": [
                  Node {
                    "end": 63,
                    "raw": "'custom'",
                    "start": 55,
                    "type": "Literal",
                    "value": "custom",
                  },
                ],
                "callee": Node {
                  "end": 54,
                  "name": "alert",
                  "start": 49,
                  "type": "Identifier",
                },
                "end": 64,
                "start": 49,
                "type": "CallExpression",
              },
              "start": 49,
              "type": "ExpressionStatement",
            },
            Node {
              "body": [
                Node {
                  "body": Node {
                    "body": [],
                    "end": 46,
                    "start": 44,
                    "type": "BlockStatement",
                  },
                  "end": 46,
                  "expression": false,
                  "generator": false,
                  "id": Node {
                    "end": 41,
                    "name": "alert",
                    "start": 36,
                    "type": "Identifier",
                  },
                  "params": [],
                  "start": 27,
                  "type": "FunctionDeclaration",
                },
                Node {
                  "end": 64,
                  "expression": Node {
                    "arguments": [
                      Node {
                        "end": 63,
                        "raw": "'custom'",
                        "start": 55,
                        "type": "Literal",
                        "value": "custom",
                      },
                    ],
                    "callee": Node {
                      "end": 54,
                      "name": "alert",
                      "start": 49,
                      "type": "Identifier",
                    },
                    "end": 64,
                    "start": 49,
                    "type": "CallExpression",
                  },
                  "start": 49,
                  "type": "ExpressionStatement",
                },
              ],
              "end": 66,
              "start": 23,
              "type": "BlockStatement",
            },
            Node {
              "body": Node {
                "body": [
                  Node {
                    "body": Node {
                      "body": [],
                      "end": 46,
                      "start": 44,
                      "type": "BlockStatement",
                    },
                    "end": 46,
                    "expression": false,
                    "generator": false,
                    "id": Node {
                      "end": 41,
                      "name": "alert",
                      "start": 36,
                      "type": "Identifier",
                    },
                    "params": [],
                    "start": 27,
                    "type": "FunctionDeclaration",
                  },
                  Node {
                    "end": 64,
                    "expression": Node {
                      "arguments": [
                        Node {
                          "end": 63,
                          "raw": "'custom'",
                          "start": 55,
                          "type": "Literal",
                          "value": "custom",
                        },
                      ],
                      "callee": Node {
                        "end": 54,
                        "name": "alert",
                        "start": 49,
                        "type": "Identifier",
                      },
                      "end": 64,
                      "start": 49,
                      "type": "CallExpression",
                    },
                    "start": 49,
                    "type": "ExpressionStatement",
                  },
                ],
                "end": 66,
                "start": 23,
                "type": "BlockStatement",
              },
              "end": 66,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "start": 17,
              "type": "ArrowFunctionExpression",
            },
            Node {
              "arguments": [
                Node {
                  "body": Node {
                    "body": [
                      Node {
                        "body": Node {
                          "body": [],
                          "end": 46,
                          "start": 44,
                          "type": "BlockStatement",
                        },
                        "end": 46,
                        "expression": false,
                        "generator": false,
                        "id": Node {
                          "end": 41,
                          "name": "alert",
                          "start": 36,
                          "type": "Identifier",
                        },
                        "params": [],
                        "start": 27,
                        "type": "FunctionDeclaration",
                      },
                      Node {
                        "end": 64,
                        "expression": Node {
                          "arguments": [
                            Node {
                              "end": 63,
                              "raw": "'custom'",
                              "start": 55,
                              "type": "Literal",
                              "value": "custom",
                            },
                          ],
                          "callee": Node {
                            "end": 54,
                            "name": "alert",
                            "start": 49,
                            "type": "Identifier",
                          },
                          "end": 64,
                          "start": 49,
                          "type": "CallExpression",
                        },
                        "start": 49,
                        "type": "ExpressionStatement",
                      },
                    ],
                    "end": 66,
                    "start": 23,
                    "type": "BlockStatement",
                  },
                  "end": 66,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "start": 17,
                  "type": "ArrowFunctionExpression",
                },
              ],
              "callee": Node {
                "arguments": [
                  Node {
                    "end": 13,
                    "raw": "'hello'",
                    "start": 6,
                    "type": "Literal",
                    "value": "hello",
                  },
                ],
                "callee": Node {
                  "end": 5,
                  "name": "alert",
                  "start": 0,
                  "type": "Identifier",
                },
                "end": 14,
                "start": 0,
                "type": "CallExpression",
              },
              "end": 67,
              "start": 0,
              "type": "CallExpression",
            },
            Node {
              "arguments": [],
              "callee": Node {
                "arguments": [
                  Node {
                    "body": Node {
                      "body": [
                        Node {
                          "body": Node {
                            "body": [],
                            "end": 46,
                            "start": 44,
                            "type": "BlockStatement",
                          },
                          "end": 46,
                          "expression": false,
                          "generator": false,
                          "id": Node {
                            "end": 41,
                            "name": "alert",
                            "start": 36,
                            "type": "Identifier",
                          },
                          "params": [],
                          "start": 27,
                          "type": "FunctionDeclaration",
                        },
                        Node {
                          "end": 64,
                          "expression": Node {
                            "arguments": [
                              Node {
                                "end": 63,
                                "raw": "'custom'",
                                "start": 55,
                                "type": "Literal",
                                "value": "custom",
                              },
                            ],
                            "callee": Node {
                              "end": 54,
                              "name": "alert",
                              "start": 49,
                              "type": "Identifier",
                            },
                            "end": 64,
                            "start": 49,
                            "type": "CallExpression",
                          },
                          "start": 49,
                          "type": "ExpressionStatement",
                        },
                      ],
                      "end": 66,
                      "start": 23,
                      "type": "BlockStatement",
                    },
                    "end": 66,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "start": 17,
                    "type": "ArrowFunctionExpression",
                  },
                ],
                "callee": Node {
                  "arguments": [
                    Node {
                      "end": 13,
                      "raw": "'hello'",
                      "start": 6,
                      "type": "Literal",
                      "value": "hello",
                    },
                  ],
                  "callee": Node {
                    "end": 5,
                    "name": "alert",
                    "start": 0,
                    "type": "Identifier",
                  },
                  "end": 14,
                  "start": 0,
                  "type": "CallExpression",
                },
                "end": 67,
                "start": 0,
                "type": "CallExpression",
              },
              "end": 69,
              "start": 0,
              "type": "CallExpression",
            },
            Node {
              "end": 69,
              "expression": Node {
                "arguments": [],
                "callee": Node {
                  "arguments": [
                    Node {
                      "body": Node {
                        "body": [
                          Node {
                            "body": Node {
                              "body": [],
                              "end": 46,
                              "start": 44,
                              "type": "BlockStatement",
                            },
                            "end": 46,
                            "expression": false,
                            "generator": false,
                            "id": Node {
                              "end": 41,
                              "name": "alert",
                              "start": 36,
                              "type": "Identifier",
                            },
                            "params": [],
                            "start": 27,
                            "type": "FunctionDeclaration",
                          },
                          Node {
                            "end": 64,
                            "expression": Node {
                              "arguments": [
                                Node {
                                  "end": 63,
                                  "raw": "'custom'",
                                  "start": 55,
                                  "type": "Literal",
                                  "value": "custom",
                                },
                              ],
                              "callee": Node {
                                "end": 54,
                                "name": "alert",
                                "start": 49,
                                "type": "Identifier",
                              },
                              "end": 64,
                              "start": 49,
                              "type": "CallExpression",
                            },
                            "start": 49,
                            "type": "ExpressionStatement",
                          },
                        ],
                        "end": 66,
                        "start": 23,
                        "type": "BlockStatement",
                      },
                      "end": 66,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "start": 17,
                      "type": "ArrowFunctionExpression",
                    },
                  ],
                  "callee": Node {
                    "arguments": [
                      Node {
                        "end": 13,
                        "raw": "'hello'",
                        "start": 6,
                        "type": "Literal",
                        "value": "hello",
                      },
                    ],
                    "callee": Node {
                      "end": 5,
                      "name": "alert",
                      "start": 0,
                      "type": "Identifier",
                    },
                    "end": 14,
                    "start": 0,
                    "type": "CallExpression",
                  },
                  "end": 67,
                  "start": 0,
                  "type": "CallExpression",
                },
                "end": 69,
                "start": 0,
                "type": "CallExpression",
              },
              "start": 0,
              "type": "ExpressionStatement",
            },
            Node {
              "body": [
                Node {
                  "end": 69,
                  "expression": Node {
                    "arguments": [],
                    "callee": Node {
                      "arguments": [
                        Node {
                          "body": Node {
                            "body": [
                              Node {
                                "body": Node {
                                  "body": [],
                                  "end": 46,
                                  "start": 44,
                                  "type": "BlockStatement",
                                },
                                "end": 46,
                                "expression": false,
                                "generator": false,
                                "id": Node {
                                  "end": 41,
                                  "name": "alert",
                                  "start": 36,
                                  "type": "Identifier",
                                },
                                "params": [],
                                "start": 27,
                                "type": "FunctionDeclaration",
                              },
                              Node {
                                "end": 64,
                                "expression": Node {
                                  "arguments": [
                                    Node {
                                      "end": 63,
                                      "raw": "'custom'",
                                      "start": 55,
                                      "type": "Literal",
                                      "value": "custom",
                                    },
                                  ],
                                  "callee": Node {
                                    "end": 54,
                                    "name": "alert",
                                    "start": 49,
                                    "type": "Identifier",
                                  },
                                  "end": 64,
                                  "start": 49,
                                  "type": "CallExpression",
                                },
                                "start": 49,
                                "type": "ExpressionStatement",
                              },
                            ],
                            "end": 66,
                            "start": 23,
                            "type": "BlockStatement",
                          },
                          "end": 66,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "start": 17,
                          "type": "ArrowFunctionExpression",
                        },
                      ],
                      "callee": Node {
                        "arguments": [
                          Node {
                            "end": 13,
                            "raw": "'hello'",
                            "start": 6,
                            "type": "Literal",
                            "value": "hello",
                          },
                        ],
                        "callee": Node {
                          "end": 5,
                          "name": "alert",
                          "start": 0,
                          "type": "Identifier",
                        },
                        "end": 14,
                        "start": 0,
                        "type": "CallExpression",
                      },
                      "end": 67,
                      "start": 0,
                      "type": "CallExpression",
                    },
                    "end": 69,
                    "start": 0,
                    "type": "CallExpression",
                  },
                  "start": 0,
                  "type": "ExpressionStatement",
                },
              ],
              "end": 69,
              "sourceType": "script",
              "start": 0,
              "type": "Program",
            },
          ],
        },
      ]
    `)
  })


  it('checkAPI', () => {
    // using featureID of caniuse
    const api = 'api.Window.alert'
    expect(checkAPI(api, browserslist)).toMatchInlineSnapshot('true')
  })
})


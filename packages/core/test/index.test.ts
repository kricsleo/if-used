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
              "end": 50,
              "start": 44,
              "type": "BlockStatement",
            },
            Node {
              "body": Node {
                "body": [],
                "end": 50,
                "start": 44,
                "type": "BlockStatement",
              },
              "end": 50,
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
              "end": 58,
              "name": "alert",
              "start": 53,
              "type": "Identifier",
            },
            Node {
              "end": 67,
              "raw": "'custom'",
              "start": 59,
              "type": "Literal",
              "value": "custom",
            },
            Node {
              "arguments": [
                Node {
                  "end": 67,
                  "raw": "'custom'",
                  "start": 59,
                  "type": "Literal",
                  "value": "custom",
                },
              ],
              "callee": Node {
                "end": 58,
                "name": "alert",
                "start": 53,
                "type": "Identifier",
              },
              "end": 68,
              "start": 53,
              "type": "CallExpression",
            },
            Node {
              "end": 68,
              "expression": Node {
                "arguments": [
                  Node {
                    "end": 67,
                    "raw": "'custom'",
                    "start": 59,
                    "type": "Literal",
                    "value": "custom",
                  },
                ],
                "callee": Node {
                  "end": 58,
                  "name": "alert",
                  "start": 53,
                  "type": "Identifier",
                },
                "end": 68,
                "start": 53,
                "type": "CallExpression",
              },
              "start": 53,
              "type": "ExpressionStatement",
            },
            Node {
              "body": [
                Node {
                  "body": Node {
                    "body": [],
                    "end": 50,
                    "start": 44,
                    "type": "BlockStatement",
                  },
                  "end": 50,
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
                  "end": 68,
                  "expression": Node {
                    "arguments": [
                      Node {
                        "end": 67,
                        "raw": "'custom'",
                        "start": 59,
                        "type": "Literal",
                        "value": "custom",
                      },
                    ],
                    "callee": Node {
                      "end": 58,
                      "name": "alert",
                      "start": 53,
                      "type": "Identifier",
                    },
                    "end": 68,
                    "start": 53,
                    "type": "CallExpression",
                  },
                  "start": 53,
                  "type": "ExpressionStatement",
                },
              ],
              "end": 70,
              "start": 23,
              "type": "BlockStatement",
            },
            Node {
              "body": Node {
                "body": [
                  Node {
                    "body": Node {
                      "body": [],
                      "end": 50,
                      "start": 44,
                      "type": "BlockStatement",
                    },
                    "end": 50,
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
                    "end": 68,
                    "expression": Node {
                      "arguments": [
                        Node {
                          "end": 67,
                          "raw": "'custom'",
                          "start": 59,
                          "type": "Literal",
                          "value": "custom",
                        },
                      ],
                      "callee": Node {
                        "end": 58,
                        "name": "alert",
                        "start": 53,
                        "type": "Identifier",
                      },
                      "end": 68,
                      "start": 53,
                      "type": "CallExpression",
                    },
                    "start": 53,
                    "type": "ExpressionStatement",
                  },
                ],
                "end": 70,
                "start": 23,
                "type": "BlockStatement",
              },
              "end": 70,
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
                          "end": 50,
                          "start": 44,
                          "type": "BlockStatement",
                        },
                        "end": 50,
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
                        "end": 68,
                        "expression": Node {
                          "arguments": [
                            Node {
                              "end": 67,
                              "raw": "'custom'",
                              "start": 59,
                              "type": "Literal",
                              "value": "custom",
                            },
                          ],
                          "callee": Node {
                            "end": 58,
                            "name": "alert",
                            "start": 53,
                            "type": "Identifier",
                          },
                          "end": 68,
                          "start": 53,
                          "type": "CallExpression",
                        },
                        "start": 53,
                        "type": "ExpressionStatement",
                      },
                    ],
                    "end": 70,
                    "start": 23,
                    "type": "BlockStatement",
                  },
                  "end": 70,
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
              "end": 71,
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
                            "end": 50,
                            "start": 44,
                            "type": "BlockStatement",
                          },
                          "end": 50,
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
                          "end": 68,
                          "expression": Node {
                            "arguments": [
                              Node {
                                "end": 67,
                                "raw": "'custom'",
                                "start": 59,
                                "type": "Literal",
                                "value": "custom",
                              },
                            ],
                            "callee": Node {
                              "end": 58,
                              "name": "alert",
                              "start": 53,
                              "type": "Identifier",
                            },
                            "end": 68,
                            "start": 53,
                            "type": "CallExpression",
                          },
                          "start": 53,
                          "type": "ExpressionStatement",
                        },
                      ],
                      "end": 70,
                      "start": 23,
                      "type": "BlockStatement",
                    },
                    "end": 70,
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
                "end": 71,
                "start": 0,
                "type": "CallExpression",
              },
              "end": 73,
              "start": 0,
              "type": "CallExpression",
            },
            Node {
              "end": 73,
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
                              "end": 50,
                              "start": 44,
                              "type": "BlockStatement",
                            },
                            "end": 50,
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
                            "end": 68,
                            "expression": Node {
                              "arguments": [
                                Node {
                                  "end": 67,
                                  "raw": "'custom'",
                                  "start": 59,
                                  "type": "Literal",
                                  "value": "custom",
                                },
                              ],
                              "callee": Node {
                                "end": 58,
                                "name": "alert",
                                "start": 53,
                                "type": "Identifier",
                              },
                              "end": 68,
                              "start": 53,
                              "type": "CallExpression",
                            },
                            "start": 53,
                            "type": "ExpressionStatement",
                          },
                        ],
                        "end": 70,
                        "start": 23,
                        "type": "BlockStatement",
                      },
                      "end": 70,
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
                  "end": 71,
                  "start": 0,
                  "type": "CallExpression",
                },
                "end": 73,
                "start": 0,
                "type": "CallExpression",
              },
              "start": 0,
              "type": "ExpressionStatement",
            },
            Node {
              "body": [
                Node {
                  "end": 73,
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
                                  "end": 50,
                                  "start": 44,
                                  "type": "BlockStatement",
                                },
                                "end": 50,
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
                                "end": 68,
                                "expression": Node {
                                  "arguments": [
                                    Node {
                                      "end": 67,
                                      "raw": "'custom'",
                                      "start": 59,
                                      "type": "Literal",
                                      "value": "custom",
                                    },
                                  ],
                                  "callee": Node {
                                    "end": 58,
                                    "name": "alert",
                                    "start": 53,
                                    "type": "Identifier",
                                  },
                                  "end": 68,
                                  "start": 53,
                                  "type": "CallExpression",
                                },
                                "start": 53,
                                "type": "ExpressionStatement",
                              },
                            ],
                            "end": 70,
                            "start": 23,
                            "type": "BlockStatement",
                          },
                          "end": 70,
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
                      "end": 71,
                      "start": 0,
                      "type": "CallExpression",
                    },
                    "end": 73,
                    "start": 0,
                    "type": "CallExpression",
                  },
                  "start": 0,
                  "type": "ExpressionStatement",
                },
              ],
              "end": 73,
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
    const api = 'flexbox'
    expect(checkAPI(api, browserslist)).toMatchInlineSnapshot('true')
  })
})


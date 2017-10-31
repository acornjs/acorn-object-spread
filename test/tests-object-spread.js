// ObjectSpread tests

var fbTestFixture = {
  // Taken and adapted from babylon's tests.
  'ObjectSpread': {
    'obj = { then: 1, catch: 2 }': {
      type: "ExpressionStatement",
      start: 0,
      end: 27,
      expression: {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 27,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 0,
          "end": 3,
          "name": "obj"
        },
        "right": {
          "type": "ObjectExpression",
          "start": 6,
          "end": 27,
          "properties": [
            {
              "type": "Property",
              "start": 8,
              "end": 15,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 8,
                "end": 12,
                "name": "then"
              },
              "value": {
                "type": "Literal",
                "start": 14,
                "end": 15,
                "value": 1,
                "raw": "1"
              },
              "kind": "init"
            },
            {
              "type": "Property",
              "start": 17,
              "end": 25,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17,
                "end": 22,
                "name": "catch"
              },
              "value": {
                "type": "Literal",
                "start": 24,
                "end": 25,
                "value": 2,
                "raw": "2"
              },
              "kind": "init"
            }
          ]
        }
      }
    },

    'let z = {...x}': {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "z"
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 14,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 9,
                "end": 13,
                "argument": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 13,
                  "name": "x"
                }
              }
            ]
          }
        }
      ],
      "kind": "let"
    },
    'z = {x, ...y}': {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 13,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 0,
          "end": 1,
          "name": "z"
        },
        "right": {
          "type": "ObjectExpression",
          "start": 4,
          "end": 13,
          "properties": [
            {
              "type": "Property",
              "start": 5,
              "end": 6,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 5,
                "end": 6,
                "name": "x"
              },
              "value": {
                "type": "Identifier",
                "start": 5,
                "end": 6,
                "name": "x"
              },
              "kind": "init"
            },
            {
              "type": "SpreadElement",
              "start": 8,
              "end": 12,
              "argument": {
                "type": "Identifier",
                "start": 11,
                "end": 12,
                "name": "y"
              }
            }
          ]
        }
      }
    },
    '({x, ...y, a, ...b, c})': {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 23,
      "expression": {
        "type": "ObjectExpression",
        "start": 1,
        "end": 22,
        "properties": [
          {
            "type": "Property",
            "start": 2,
            "end": 3,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2,
              "end": 3,
              "name": "x"
            },
            "value": {
              "type": "Identifier",
              "start": 2,
              "end": 3,
              "name": "x"
            },
            "kind": "init"
          },
          {
            "type": "SpreadElement",
            "start": 5,
            "end": 9,
            "argument": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "name": "y"
            }
          },
          {
            "type": "Property",
            "start": 11,
            "end": 12,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "a"
            },
            "value": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "a"
            },
            "kind": "init"
          },
          {
            "type": "SpreadElement",
            "start": 14,
            "end": 18,
            "argument": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "b"
            }
          },
          {
            "type": "Property",
            "start": 20,
            "end": 21,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "c"
            },
            "value": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "c"
            },
            "kind": "init"
          }
        ]
      }
    },
    "var someObject = { someKey: { ...mapGetters([ 'some_val_1', 'some_val_2' ]) } }": {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 14,
            "name": "someObject"
          },
          "init": {
            "type": "ObjectExpression",
            "start": 17,
            "end": 79,
            "properties": [
              {
                "type": "Property",
                "start": 19,
                "end": 77,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 26,
                  "name": "someKey"
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 28,
                  "end": 77,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 30,
                      "end": 75,
                      "argument": {
                        "type": "CallExpression",
                        "start": 33,
                        "end": 75,
                        "callee": {
                          "type": "Identifier",
                          "start": 33,
                          "end": 43,
                          "name": "mapGetters"
                        },
                        "arguments": [
                          {
                            "type": "ArrayExpression",
                            "start": 44,
                            "end": 74,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 46,
                                "end": 58,
                                "value": "some_val_1",
                                "raw": "'some_val_1'"
                              },
                              {
                                "type": "Literal",
                                "start": 60,
                                "end": 72,
                                "value": "some_val_2",
                                "raw": "'some_val_2'"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                "kind": "init"
              }
            ]
          }
        }
      ],
      "kind": "var"
    }
  },
  'ObjectRest': {
    'let {x, ...y} = v': {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "ObjectPattern",
            "start": 4,
            "end": 13,
            "properties": [
              {
                "type": "Property",
                "start": 5,
                "end": 6,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5,
                  "end": 6,
                  "name": "x"
                },
                "kind": "init",
                "value": {
                  "type": "Identifier",
                  "start": 5,
                  "end": 6,
                  "name": "x"
                }
              },
              {
                "type": "RestElement",
                "start": 8,
                "end": 12,
                "argument": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 12,
                  "name": "y"
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "v"
          }
        }
      ],
      "kind": "let"
    },
    '(function({x, ...y}) {})': {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 24,
      "expression": {
        "type": "FunctionExpression",
        "start": 1,
        "end": 23,
        "id": null,
        "generator": false,
        "expression": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 10,
            "end": 19,
            "properties": [
              {
                "type": "Property",
                "start": 11,
                "end": 12,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 12,
                  "name": "x"
                },
                "kind": "init",
                "value": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 12,
                  "name": "x"
                }
              },
              {
                "type": "RestElement",
                "start": 14,
                "end": 18,
                "argument": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 18,
                  "name": "y"
                }
              }
            ]
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 21,
          "end": 23,
          "body": []
        }
      }
    },
    'let {...{x, y}} = {}': {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "id": {
            "type": "ObjectPattern",
            "start": 4,
            "end": 15,
            "properties": [
              {
                "type": "RestElement",
                "start": 5,
                "end": 14,
                "argument": {
                  "type": "ObjectPattern",
                  "start": 8,
                  "end": 14,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 9,
                      "end": 10,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 9,
                        "end": 10,
                        "name": "x"
                      },
                      "kind": "init",
                      "value": {
                        "type": "Identifier",
                        "start": 9,
                        "end": 10,
                        "name": "x"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 12,
                      "end": 13,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 12,
                        "end": 13,
                        "name": "y"
                      },
                      "kind": "init",
                      "value": {
                        "type": "Identifier",
                        "start": 12,
                        "end": 13,
                        "name": "y"
                      }
                    }
                  ]
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 18,
            "end": 20,
            "properties": []
          }
        }
      ],
      "kind": "let"
    },
    'let {...{...{x, y}}} = {}': {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 25,
          "id": {
            "type": "ObjectPattern",
            "start": 4,
            "end": 20,
            "properties": [
              {
                "type": "RestElement",
                "start": 5,
                "end": 19,
                "argument": {
                  "type": "ObjectPattern",
                  "start": 8,
                  "end": 19,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 9,
                      "end": 18,
                      "argument": {
                        "type": "ObjectPattern",
                        "start": 12,
                        "end": 18,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 13,
                            "end": 14,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 13,
                              "end": 14,
                              "name": "x"
                            },
                            "kind": "init",
                            "value": {
                              "type": "Identifier",
                              "start": 13,
                              "end": 14,
                              "name": "x"
                            }
                          },
                          {
                            "type": "Property",
                            "start": 16,
                            "end": 17,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 16,
                              "end": 17,
                              "name": "y"
                            },
                            "kind": "init",
                            "value": {
                              "type": "Identifier",
                              "start": 16,
                              "end": 17,
                              "name": "y"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 23,
            "end": 25,
            "properties": []
          }
        }
      ],
      "kind": "let"
    }
  }
};

if (typeof exports !== "undefined") {
  var test = require("./driver.js").test;
  var testFail = require("./driver.js").testFail;
  var tokTypes = require("../").tokTypes;
}

for (var ns in fbTestFixture) {
  ns = fbTestFixture[ns];
  for (var code in ns) {
    test(code, {
      type: 'Program',
      body: [ns[code]],
      start: 0,
      end: code.length,
      sourceType: "script"
    }, {
      ecmaVersion: 7
    });
  }
}

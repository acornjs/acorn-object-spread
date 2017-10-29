// ObjectSpread tests

var fbTestFixture = {
  // Taken and adapted from babylon's tests.
  'ObjectSpread': {
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
    'const fn = ({text = "default", ...props}) => text + props.children': {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "name": "fn"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 11,
            "end": 66,
            "id": null,
            "generator": false,
            "expression": true,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 12,
                "end": 40,
                "properties": [
                  {
                    "type": "Property",
                    "start": 13,
                    "end": 29,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13,
                      "end": 17,
                      "name": "text"
                    },
                    "kind": "init",
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 13,
                      "end": 29,
                      "left": {
                        "type": "Identifier",
                        "start": 13,
                        "end": 17,
                        "name": "text"
                      },
                      "right": {
                        "type": "Literal",
                        "start": 20,
                        "end": 29,
                        "value": "default",
                        "raw": "\"default\""
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 31,
                    "end": 39,
                    "argument": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 39,
                      "name": "props"
                    }
                  }
                ]
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 45,
              "end": 66,
              "left": {
                "type": "Identifier",
                "start": 45,
                "end": 49,
                "name": "text"
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 52,
                "end": 66,
                "object": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 57,
                  "name": "props"
                },
                "property": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 66,
                  "name": "children"
                },
                "computed": false
              }
            }
          }
        }
      ],
      "kind": "const"
    }
  }
};

if (typeof exports !== "undefined") {
  var test = require("./driver.js").test;
  var testFail = require("./driver.js").testFail;
  var tokTypes = require("../").tokTypes;
}

testFail("({get x() {}}) => {}", "Object pattern can't contain getter or setter (1:6)")
testFail("let {...x, ...y} = {}", "Comma is not permitted after the rest element (1:9)")
testFail("({...x,}) => z", "Comma is not permitted after the rest element (1:6)")
testFail("export const { foo, ...bar } = baz;\nexport const bar = 1;\n", "Identifier 'bar' has already been declared (2:13)", {
  sourceType: "module"
})
testFail("function ({...x,}) { z }", "Unexpected token (1:9)")
testFail("let {...{x, y}} = {}", "Unexpected token (1:8)")
testFail("let {...{...{x, y}}} = {}", "Unexpected token (1:8)")

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

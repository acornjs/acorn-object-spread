# acorn5-object-spread changelog

## 5.1.0

* Make plugin compatible with acorn 5.3.x

## 5.0.0

* Require acorn 5.2.x

## 4.0.0

* Remove support for complex rest properties since they are forbidded by the
  spec

## 3.1.0

* Support complex rest properties like `{...{a = 5, ...as}}`
* Support rest properties in arrow function arguments
* Fail if rest property is not last property or has a trailing comma
* Detect duplicate exports with rest properties
* Don't complain about duplicate property names in patterns

## 3.0.0

* Support rest properties
* Emit `SpreadElement` instead of `SpreadProperty` nodes

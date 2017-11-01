'use strict';

module.exports = function(acorn) {
  if (acorn.version.substr(0, 1) !== "5") {
    throw new Error("Unsupported acorn version " + acorn.version + ", please use acorn 5");
  }
  var tt = acorn.tokTypes;
  var pp = acorn.Parser.prototype;

  // this is the same parseObj that acorn has with...
  function parseObj(isPattern, refDestructuringErrors) {
    let node = this.startNode(), first = true, propHash = {}
    node.properties = []
    this.next()
    while (!this.eat(tt.braceR)) {
      if (!first) {
        this.expect(tt.comma)
        if (this.afterTrailingComma(tt.braceR)) break
      } else first = false

      let prop = this.startNode(), isGenerator, isAsync, startPos, startLoc
      if (this.options.ecmaVersion >= 6) {
        // ...the spread logic borrowed from babylon :)
        if (this.type === tt.ellipsis) {
          prop = this.parseSpread()
          prop.type = isPattern ? "RestElement" : "SpreadElement"
          node.properties.push(prop)
          continue
        }

        prop.method = false
        prop.shorthand = false
        if (isPattern || refDestructuringErrors) {
          startPos = this.start
          startLoc = this.startLoc
        }
        if (!isPattern)
          isGenerator = this.eat(tt.star)
      }
      this.parsePropertyName(prop)
      if (!isPattern && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
        isAsync = true
        this.parsePropertyName(prop, refDestructuringErrors)
      } else {
        isAsync = false
      }
      this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors)
      this.checkPropClash(prop, propHash)
      node.properties.push(this.finishNode(prop, "Property"))
    }
    return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
  }

  const getCheckLVal = origCheckLVal => function (expr, bindingType, checkClashes) {
    if (expr.type == "ObjectPattern") {
      for (let prop of expr.properties)
        this.checkLVal(prop, bindingType, checkClashes)
      return
    } else if (expr.type === "Property") {
      return this.checkLVal(expr.value, bindingType, checkClashes)
    }
    return origCheckLVal.apply(this, arguments)
  }

  acorn.plugins.objectSpread = function objectSpreadPlugin(instance) {
    pp.parseObj = parseObj;
    pp.checkLVal = getCheckLVal(pp.checkLVal)
  };

  return acorn;
};

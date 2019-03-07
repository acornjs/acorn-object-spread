'use strict';

module.exports = function(acorn) {
  var tt = acorn.tokTypes;
  var pp = acorn.Parser.prototype;

  var originalCheckLVal = pp.checkLVal;
  var originalToAssignable = pp.toAssignable;

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

      let prop = this.startNode(), isGenerator, startPos, startLoc
      if (this.options.ecmaVersion >= 6) {
        // ...the spread logic borrowed from babylon :)
        if (this.type === tt.ellipsis) {
          prop = this.parseSpread()
          prop.type = isPattern ? "RestProperty" : "SpreadProperty"
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
      this.parsePropertyValue(prop, isPattern, isGenerator, startPos, startLoc, refDestructuringErrors)
      this.checkPropClash(prop, propHash)
      node.properties.push(this.finishNode(prop, "Property"))
    }
    return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
  }

  function toAssignable(node, isBinding) {
    if (this.options.ecmaVersion >= 6 && node) {
      switch (node.type) {
        case "AssignmentPattern":
          break;

        case "Property":
          this.toAssignable(node.value, isBinding);
          break;

        case "SpreadProperty":
          node.type = "RestProperty";
          break;

        default:
          originalToAssignable.call(this, node, isBinding);
          break;
      }
    }
    return node;
  };

  function checkLVal(expr, isBinding, checkClashes) {
    switch (expr.type) {
      case "ObjectPattern":
        for (var i = 0; i < expr.properties.length; i++) {
          let prop = expr.properties[i];
          if (prop.type === "Property") prop = prop.value;
          this.checkLVal(prop, isBinding, checkClashes);
        }
        break;

      case "RestProperty":
        this.checkLVal(expr.argument, isBinding, checkClashes);
        break;

      default:
        originalCheckLVal.call(this, expr, isBinding, checkClashes);
        break;
    }
  };

  acorn.plugins.objectSpread = function objectSpreadPlugin(instance) {
    pp.checkLVal = checkLVal;
    pp.parseObj = parseObj;
    pp.toAssignable = toAssignable;
  };

  return acorn;
};

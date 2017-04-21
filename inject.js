'use strict';

module.exports = function(acorn) {
  var tt = acorn.tokTypes;
  var pp = acorn.Parser.prototype;

  // this is the same parseObj that acorn has with...
  function parseObj(isPattern, refDestructuringErrors) {
    var node = this.startNode(), first = true, propHash = {}
    node.properties = []
    this.next()
    while (!this.eat(tt.braceR)) {
      if (!first) {
        this.expect(tt.comma)
        if (this.afterTrailingComma(tt.braceR)) break
      } else first = false
  
      var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc
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
      if (!isPattern && this.options.ecmaVersion >= 8 && !isGenerator && !prop.computed &&
          prop.key.type === "Identifier" && prop.key.name === "async" && this.type !== tt.parenL &&
          this.type !== tt.colon && !this.canInsertSemicolon()) {
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

  acorn.plugins.objectSpread = function objectSpreadPlugin(instance) {
    pp.parseObj = parseObj;
  };

  return acorn;
};

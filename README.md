# Spread and rest properties support in acorn 5

[![NPM version](https://img.shields.io/npm/v/acorn5-object-spread.svg)](https://www.npmjs.org/package/acorn5-object-spread)

This is plugin for [Acorn](http://marijnhaverbeke.nl/acorn/) - a tiny, fast JavaScript parser, written completely in JavaScript.

It implements support for spread and rest properties as defined in the stage 3 proposal [Object Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread).

## Usage

You can use this module directly in order to get an Acorn instance with the plugin installed:

```javascript
var acorn = require('acorn5-object-spread');
```

Or you can use `inject.js` for injecting the plugin into your own version of Acorn like this:

```javascript
var acorn = require('acorn5-object-spread/inject')(require('./custom-acorn'));
```

Then, use the `plugins` option whenever you need to support object spread or rest while parsing:

```javascript
var ast = acorn.parse(code, {
  plugins: { objectSpread: true }
});
```
## License

This plugin is issued under the [MIT license](./LICENSE).

With <3 by UXtemple.

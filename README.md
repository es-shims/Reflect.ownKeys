# reflect.ownkeys <sup>[![Version Badge][npm-version-svg]][package-url]</sup>


[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

An ES2015 spec-compliant `Reflect.ownKeys` shim. Invoke its "shim" method to shim `Reflect.ownKeys` if it is unavailable or noncompliant.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-reflect.ownkeys).

Most common usage:
```js
var assert = require('assert');
var ownKeys = require('reflect.ownkeys');

var obj = { a: 1, b: 2, c: 3 };
var expected = ['a', 'b', 'c'];

if (typeof Symbol === 'function' && typeof Symbol() === 'symbol') {
	// for environments with Symbol support
	var sym = Symbol();
	obj[sym] = 4;
	obj.d = sym;
	expected.push(sym, 'd');
}

assert.deepEqual(ownKeys(obj), expected);

if (!Reflect.ownKeys) {
	ownKeys.shim();
}

assert.deepEqual(Reflect.ownKeys(obj), expected);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.com/package/reflect.ownkeys
[npm-version-svg]: http://versionbadg.es/es-shims/Reflect.ownKeys.svg
[travis-svg]: https://travis-ci.org/es-shims/Reflect.ownKeys.svg
[travis-url]: https://travis-ci.org/es-shims/Reflect.ownKeys
[deps-svg]: https://david-dm.org/es-shims/Reflect.ownKeys.svg
[deps-url]: https://david-dm.org/es-shims/Reflect.ownKeys
[dev-deps-svg]: https://david-dm.org/es-shims/Reflect.ownKeys/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Reflect.ownKeys#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/reflect.ownkeys.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/reflect.ownkeys.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/reflect.ownkeys.svg
[downloads-url]: http://npm-stat.com/charts.html?package=reflect.ownkeys
[greenkeeper-image]: https://badges.greenkeeper.io/es-shims/Reflect.ownKeys.svg
[greenkeeper-url]: https://greenkeeper.io/

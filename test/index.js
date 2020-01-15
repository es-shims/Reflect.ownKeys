'use strict';

var test = require('tape');
var hasSymbols = require('has-symbols')();

var ownKeys = require('..');

test('normal object', function (t) {
	var o = { a: 1, b: 2 };

	t.deepEqual(ownKeys(o), ['a', 'b'], 'gets own keys');

	t.end();
});

test('object with prototype', function (t) {
	var p = { a: 1, b: 2 };
	var o = { c: 3, d: 4, __proto__: p };

	t.deepEqual(ownKeys(o), ['c', 'd'], 'gets own keys');

	t.end();
});

test('object with non-enumerable properties', { skip: !Object.defineProperty }, function (t) {
	t.plan(1);

	var o = {};
	Object.defineProperty(o, 'a', {
		enumerable: false,
		value: 1
	});
	Object.defineProperty(o, 'b', {
		get: function () { return 2; },
		enumerable: false
	});

	t.deepEqual(ownKeys(o), ['a', 'b'], 'gets own keys');
});

test('Symbols', { skip: !hasSymbols }, function (t) {
	var a = Symbol('a');
	var b = Symbol('b');

	var o = { a: 1, b: 2 };
	o[a] = 3;
	o[b] = 4;
	t.deepEqual(ownKeys(o), ['a', 'b', a, b], 'object with own symbol properties gets own keys');

	var p = { a: 1 }; p[a] = 3;
	var child = { __proto__: p };
	child.b = 2;
	child[b] = 4;
	t.deepEqual(ownKeys(child), ['b', b], 'object with symbol properties in prototype gets own keys');

	t.test('object with non-enumerable symbol properties', { skip: !Object.defineProperty }, function (st) {
		st.plan(1);

		var nonEnum = { a: 1 };
		Object.defineProperty(nonEnum, a, {
			enumerable: false,
			value: 1
		});

		st.deepEqual(ownKeys(nonEnum), ['a', a], 'gets own keys');
	});

	t.end();
});

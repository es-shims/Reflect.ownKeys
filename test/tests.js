'use strict';

var hasSymbols = require('has-symbols')();

module.exports = function runTests(ownKeys, t) {
	t.test('normal object', function (st) {
		var o = { a: 1, b: 2 };

		st.deepEqual(ownKeys(o).sort(), ['a', 'b'].sort(), 'gets own keys');

		st.end();
	});

	t.test('object with prototype', function (st) {
		var p = { a: 1, b: 2 };
		var o = { c: 3, d: 4, __proto__: p };

		st.deepEqual(ownKeys(o).sort(), ['c', 'd'].sort(), 'gets own keys');

		st.end();
	});

	t.test('object with non-enumerable properties', { skip: !Object.defineProperty }, function (st) {
		st.plan(1);

		var o = {};
		Object.defineProperty(o, 'a', {
			enumerable: false,
			value: 1
		});
		Object.defineProperty(o, 'b', {
			get: function () { return 2; },
			enumerable: false
		});

		st.deepEqual(ownKeys(o).sort(), ['a', 'b'].sort(), 'gets own keys');
	});

	t.test('Symbols', { skip: !hasSymbols }, function (st) {
		var a = Symbol('a');
		var b = Symbol('b');

		var o = { a: 1, b: 2 };
		o[a] = 3;
		o[b] = 4;
		st.deepEqual(ownKeys(o), ['a', 'b', a, b], 'object with own symbol properties gets own keys');

		var p = { a: 1 }; p[a] = 3;
		var child = { __proto__: p };
		child.b = 2;
		child[b] = 4;
		st.deepEqual(ownKeys(child), ['b', b], 'object with symbol properties in prototype gets own keys');

		st.test('object with non-enumerable symbol properties', { skip: !Object.defineProperty }, function (s2t) {
			s2t.plan(1);

			var nonEnum = { a: 1 };
			Object.defineProperty(nonEnum, a, {
				enumerable: false,
				value: 1
			});

			s2t.deepEqual(ownKeys(nonEnum), ['a', a], 'gets own keys');
		});

		st.end();
	});
};

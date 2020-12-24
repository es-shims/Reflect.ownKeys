'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');

var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();
var hasStrictMode = require('has-strict-mode')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Reflect.ownKeys.length, 1, 'Relect.ownKeys has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Reflect.ownKeys.name, 'ownKeys', 'Reflect.ownKeys has name "ownKeys"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Reflect, 'ownKeys'), 'Reflect.ownKeys is not enumerable');
		et.end();
	});

	t.test('bad array/this value', { skip: !hasStrictMode }, function (st) {
		st['throws'](function () { return Reflect.ownKeys.call(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Reflect.ownKeys.call(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(Reflect.ownKeys, Reflect), t);

	t.end();
});

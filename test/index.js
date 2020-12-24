'use strict';

var ownKeys = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](function () { ownKeys(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { ownKeys(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(ownKeys, t);

	t.end();
});

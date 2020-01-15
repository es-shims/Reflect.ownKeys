'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (typeof Reflect === 'object' && typeof Reflect.ownKeys === 'function') {
		return Reflect.ownKeys;
	}
	return implementation;
};

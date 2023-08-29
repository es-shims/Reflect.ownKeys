'use strict';

var CreateMethodProperty = require('es-abstract/2023/CreateMethodProperty');
var setToStringTag = require('es-set-tostringtag');
var globalThis = require('globalthis')();

var getPolyfill = require('./polyfill');

module.exports = function shimReflectOwnKeys() {
	if (typeof Reflect === 'undefined') {
		var R = {};
		setToStringTag(R, 'Reflect');
		CreateMethodProperty(globalThis, 'Reflect', R);
	}

	var polyfill = getPolyfill();
	if (polyfill !== Reflect.ownKeys) {
		CreateMethodProperty(Reflect, 'ownKeys', polyfill);
	}
	return polyfill;
};

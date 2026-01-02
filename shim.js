'use strict';

var defineDataProperty = require('define-data-property');
var setToStringTag = require('es-set-tostringtag');
var globalThis = require('globalthis')();

var getPolyfill = require('./polyfill');

module.exports = function shimReflectOwnKeys() {
	if (typeof Reflect === 'undefined') {
		var R = {};
		setToStringTag(R, 'Reflect');
		defineDataProperty(globalThis, 'Reflect', R, true, null, null, true);
	}

	var polyfill = getPolyfill();
	if (polyfill !== Reflect.ownKeys) {
		defineDataProperty(Reflect, 'ownKeys', polyfill, true, null, null, true);
	}
	return polyfill;
};

'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');
var globalThis = require('globalthis');

module.exports = function shimReflectOwnKeys() {
	var polyfill = getPolyfill();
	if (typeof Reflect === 'undefined') {
		define(globalThis, {
			Reflect: { ownKeys: polyfill }
		});
	} else {
		define(Reflect, { ownKeys: polyfill }, {
			values: function testReflectOwnKeys() {
				return Reflect.ownKeys !== polyfill;
			}
		});
	}
	return polyfill;
};

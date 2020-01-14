'use strict';

if (typeof Reflect === 'object' && typeof Reflect.ownKeys === 'function') {
	module.exports = Reflect.ownKeys;
} else if (typeof Object.getOwnPropertySymbols === 'function') {
	module.exports = function ownKeys(o) {
		return (
			Object.getOwnPropertyNames(o).concat(Object.getOwnPropertySymbols(o))
		);
	};
} else {
	module.exports = Object.getOwnPropertyNames;
}

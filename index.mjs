import callBind from 'call-bind';

import getPolyfill from 'reflect.ownkeys/polyfill';

export default callBind(getPolyfill(), Number);

export { default as getPolyfill } from 'reflect.ownkeys/polyfill';
export { default as implementation } from 'reflect.ownkeys/implementation';
export { default as shim } from 'reflect.ownkeys/shim';

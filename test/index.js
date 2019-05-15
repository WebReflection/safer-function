const {bind, call, apply} = require('../cjs');

// basic usage
const {toString} = {};
console.assert('[object String]' === call(toString, 'any object'));

const {fromCharCode} = String;
console.assert('hello' === call(fromCharCode, String, 104, 101, 108, 108, 111));
console.assert('hello' === apply(fromCharCode, String, [104, 101, 108, 108, 111]));

// secured bound usage
const fromCharsCall = bind(fromCharCode, String);
console.assert('hello' === fromCharsCall(104, 101, 108, 108, 111));

const fromCharsApply = bind(apply, call, fromCharCode, String);
console.assert('hello' === fromCharsApply([104, 101, 108, 108, 111]));


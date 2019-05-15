# safer-function

<sup>**Social Media Photo by [freestocks.org](https://unsplash.com/@freestocks) on [Unsplash](https://unsplash.com/)**</sup>

[![Build Status](https://travis-ci.com/WebReflection/safer-function.svg?branch=master)](https://travis-ci.com/WebReflection/safer-function) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/safer-function/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/safer-function?branch=master) ![WebReflection status](https://offline.report/status/webreflection.svg)

Function traps for `bind`, `call`, and `apply`.

Please ensure this module, or any dependent of it, is included before any other or, at least, before any polyfill, to grant reliability.

```js
import {bind, call, apply} from 'safer-function';
const {bind, call, apply} = require('./');

// basic usage
const {toString} = {};
call(toString, 'any object');

const {fromCharCode} = String;
call(fromCharCode, String, 104, 101, 108, 108, 111);
apply(fromCharCode, String, [104, 101, 108, 108, 111]);

// secured bound usage
const fromCharsCall = bind(fromCharCode, String);
fromCharsCall(104, 101, 108, 108, 111);

const fromCharsApply = bind(apply, call, fromCharCode, String);
fromCharsApply([104, 101, 108, 108, 111]);

```

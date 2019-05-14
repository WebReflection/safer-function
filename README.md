# safer-function

Function traps for `bind`, `call`, and `apply`.

Please ensure this module, or any dependent of it, is included before any other or, at least, before any polyfill, to grant reliability of it's usefulness.

```js
import {bind, call, apply} from 'safer-function';

const {toString} = {};

call(toString, 'any object');
```

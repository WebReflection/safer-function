/*! (c) Andrea Giammarchi - ISC */
var call = Function.call;
var bind = call.bind(call.bind);
var apply = bind(call, call.apply);
call = bind(call, call);
module.exports = {bind, call, apply};

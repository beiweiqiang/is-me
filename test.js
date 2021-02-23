const isMe = require('./index');
const assert = require('assert');

assert(isMe('me') === true, 'is me');
assert(isMe('you') === false, 'is not me');
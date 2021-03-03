const isMe = require('./index');
const test = require('tape');

test('is me', function (t) {
    // t.plan(1);

    t.equal(isMe('me'), true);
    t.end();
});

const replace = require('.');
const test = require('tap').test;

test('simple', t => {
  t.same(
    replace(Buffer.from('foo:bar'), ':', '-'),
    Buffer.from('foo-bar')
  );
  t.same(
    replace(Buffer.from('foo:beep:bar'), ':beep:', '-'),
    Buffer.from('foo-bar')
  );
  t.same(
    replace('foo:beep:bar', ':beep:', '-'),
    Buffer.from('foo-bar')
  );
  t.same(
    replace(Buffer.from('foo:beep:bar'), 'nope', '-'),
    Buffer.from('foo:beep:bar')
  );
  t.end();
});



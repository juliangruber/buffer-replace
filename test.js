const replace = require('.');
const test = require('tap').test;

let maxStackSize = 0;

function measureStackSize() {
  maxStackSize++;
  measureStackSize();
}

try {
  measureStackSize();
} catch { }

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
  t.same(
    replace(Buffer.from(Array(maxStackSize + 1000).fill('ab').join()), 'a', 'b'),
    Buffer.from(Buffer.from(Array(maxStackSize + 1000).fill('bb').join()))
  );
  t.end();
});

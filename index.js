'use strict';

const iterBuffers = function* (buf, a, b) {
  if (!Buffer.isBuffer(buf)) buf = Buffer(buf);
  if (!Buffer.isBuffer(b)) b = Buffer(b);
  let idx = buf.indexOf(a);
  while (idx > -1) {
    yield buf.slice(0, idx);
    yield b;
    buf = buf.slice(idx + a.length);
    idx = buf.indexOf(a);
  }
  yield buf;
}

const replace = (buf, a, b) => {
  return Buffer.concat(iterBuffers(buf, a, b));
}

module.exports = replace;


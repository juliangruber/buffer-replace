'use strict';

const iterBuffers = function* (buf, a, b) {
  let workBuf = Buffer.from(buf);
  if (!Buffer.isBuffer(b)) b = Buffer.from(b);
  let idx = workBuf.indexOf(a);
  while (idx > -1) {
    yield workBuf.subarray(0, idx);
    yield b;
    workBuf = workBuf.subarray(idx + a.length);
    idx = workBuf.indexOf(a);
  }
  yield workBuf;
}

const replace = (buf, a, b) => {
  return Buffer.concat(Array.from(iterBuffers(buf, a, b)));
}

module.exports = replace;

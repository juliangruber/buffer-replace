'use strict';

const replace = (buf, a, b) => {
  if (!Buffer.isBuffer(buf)) buf = Buffer(buf);
  const idx = buf.indexOf(a);
  if (idx === -1) return buf;
  if (!Buffer.isBuffer(b)) b = Buffer(b);

  const before = buf.slice(0, idx);
  const after = replace(buf.slice(idx + a.length), a, b);
  const len = idx + b.length + after.length;
  return Buffer.concat([ before, b, after ], len);
}

module.exports = replace;


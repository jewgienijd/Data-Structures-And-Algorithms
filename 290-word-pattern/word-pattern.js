/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(p, s) {
  const p2w = new Map();
  const w2p = new Map();
  const words = s.split(' ');

  if (p.length !== words.length) return false;

  for (let i = 0; i < p.length; i++) {
    const pc = p[i];
    const w = words[i];

    if (p2w.has(pc) && p2w.get(pc) !== w) return false;
    if (w2p.has(w) && w2p.get(w) !== pc) return false;

    p2w.set(pc, w);
    w2p.set(w, pc);
  }
  return true;
};
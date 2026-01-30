/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    s = s.split('');
    t = t.split('');
    s1 = 0;
    t1 = 0;
    while(s1 < s.length && t1 < t.length) {
      if(s[s1] == t[t1]) {
        s1++;
      }
      t1++;
    }
    return s1 == s.length;
}
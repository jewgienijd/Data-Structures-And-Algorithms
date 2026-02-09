/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let hashS = {};
    let hashT = {};
  
    for (let i=0; i < s.length; i++) {
      let charS = s[i];
      let charT = t[i];
      
      if(hashS[charS] !== undefined && hashS[charS] !== charT) return false;
      if(hashT[charT] !== undefined && hashT[charT] !== charS) return false;
      
      hashS[charS] = charT;
      hashT[charT] = charS;
      }
  
    return true;
    
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split('');
    let f = 0;
    let l = s.length - 1;
    while (f < l) {
        if (s[f] != s[l]) {
            return false;
        }
        f++;
        l--;
    }
    return true;
};
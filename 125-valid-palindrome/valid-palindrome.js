/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split('');
    let l = s.length - 1;
    for(let i = 0; i <= s.length/2; i++) {
        if (s[i] !== s[l]) {
            return false;
        }
        l--;
    }
    return true;
};
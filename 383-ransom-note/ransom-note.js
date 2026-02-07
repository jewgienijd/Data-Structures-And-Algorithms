/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hashMap = {};
    for (let char of magazine) {
        hashMap[char] = (hashMap[char] || 0) + 1;
    }

    for (let char of ransomNote) {
        if (hashMap[char] == undefined || hashMap[char] <= 0) {
            return false
        } else {
            hashMap[char]--;
        }
    }

    return true;
};
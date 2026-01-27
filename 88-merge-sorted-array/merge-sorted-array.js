/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let lastNums1Point = m - 1;
    let lastNums2Point = n - 1;
    let target = m + n -1;

    while (lastNums2Point >= 0) {
        if (nums1[lastNums1Point] > nums2[lastNums2Point]) {
            nums1[target] = nums1[lastNums1Point];
            lastNums1Point--;
        } else {
            nums1[target] = nums2[lastNums2Point] ;
            lastNums2Point--;
        }
        target--;
    }
};
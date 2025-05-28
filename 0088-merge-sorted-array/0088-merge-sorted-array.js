/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  
  let a = nums1.slice(0, m);
  let merged = a.concat(nums2);
  merged.sort((a, b) => a - b);

  for (let i = 0; i < merged.length; i++) {
    nums1[i] = merged[i];
  }
};


let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1);
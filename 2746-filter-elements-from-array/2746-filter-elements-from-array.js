/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
     let res = []
  for (let i in arr) if (fn(arr[i], Number(i))) res.push(arr[i])
  return res
};
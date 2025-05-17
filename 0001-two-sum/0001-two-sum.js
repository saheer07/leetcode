/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 
function twoSum(nums, target) {
    let numMap = new Map(); 
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; 
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; numbers
        }
        
        numMap.set(nums[i], i); 
    }
    
    return []; 
}


class Solution(object):
    def missingNumber(self, nums):
        res = 0
        n = len(nums)
        for i, num in enumerate(nums):
            res ^= i ^ num
        return res ^ n

from collections import Counter

class Solution(object):
    def maxFrequencyElements(self, nums):
        freq = Counter(nums)
        max_freq = max(freq.values())
        count = sum(v == max_freq for v in freq.values())
        return count * max_freq
     

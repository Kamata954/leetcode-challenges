class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        track = set(nums)
        longest = 0

        for i in track:
            if i - 1 not in track:
                length = 1
                while length + i in track:
                    length += 1
                longest = max(longest,length)
        
        return longest
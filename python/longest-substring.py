class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_size = 0

        if s != "":
            max_size = 1

        for i in range(len(s)):
            for j in range(i + 1, len(s)):
                substring = s[i:j + 1]
                if len(set(substring)) == len(substring):
                    max_size = max(max_size, len(substring))

        return max_size

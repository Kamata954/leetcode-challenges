class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagramMap = defaultdict(list)

        for string in strs:
            count = [0] * 25
            for letter in string:
                count[ord(letter) - ord("a")] += 1
            anagramMap[tuple(count)].append(string)
        return list(anagramMap.values())

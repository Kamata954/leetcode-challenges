class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        tracker = [[] for i in range(len(nums) + 1)]
        for num in nums:
            count[num] = 1 + count.get(num,0)

        for num, cnt in count.items():
            tracker[cnt].append(num)

        res = []

        for i in range(len(nums),0,-1):
            for num in tracker[i]:
                res.append(num)
                if len(res) == k:
                    return res

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maximum_profit = 0
        l = 0

        for r in range(len(prices)):
            profit = prices[r] - prices[l]
            maximum_profit = max(profit, maximum_profit)
            if prices[l] > prices[r]:
                l = r
        return maximum_profit

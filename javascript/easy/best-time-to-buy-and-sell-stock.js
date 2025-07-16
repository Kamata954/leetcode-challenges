class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxPrice = 0;
        let l = 0;

        for(let r = 1; r < prices.length; r++){
            let profit = prices[r] - prices[l];
            maxPrice = Math.max(maxPrice, profit);
            if(prices[r] < prices[l]) l = r
        }
        return maxPrice;
    }
}

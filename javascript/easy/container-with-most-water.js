class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let l = 0
        let r = heights.length - 1;

        while (l < r){
            let len = r - l;
            let area = Math.min(heights[r],heights[l]) * len;
            maxWater = Math.max(maxWater,area);

            if(heights[l] < heights[r]) l++;
            else r--;
        }
        return maxWater;
    }
}
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numMap = new Set(nums);
        let maxLen = 0;

        for(let num of nums){
            if(!numMap.has(num -1)){
                let len = 1;
                while(len < nums.length){
                    if(numMap.has(num + len)){
                        len++
                    }
                    else break;
                }
                maxLen = Math.max(maxLen,len);
            }
        }
        return maxLen;
    }
}

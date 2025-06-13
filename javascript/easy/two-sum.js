class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let compliment = {};

        for(let i = 0; i < nums.length; i++){
            if(compliment[nums[i]] != undefined){
                return [compliment[nums[i]],i];
            }
            compliment[target - nums[i]] = i;
        }
    }
}

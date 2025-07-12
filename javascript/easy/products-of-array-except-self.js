class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let forward = [];
        let leftproduct = 1;
        let rightproduct = 1;
        let res = [];

        for(let i = 0; i < nums.length; i++){
            if(i == 0){
                forward[i] = 1;
                continue;
            }
            forward[i] = nums[i - 1] * leftproduct;
            leftproduct *= nums[i - 1]
        }

        for(let i = nums.length - 1; i >= 0; i--){
           if(i == nums.length - 1){
            continue
           }
           forward[i] *= nums[i + 1] * rightproduct;
           rightproduct *= nums[i + 1]
        }

        return forward;
    }
}

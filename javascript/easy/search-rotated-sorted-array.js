class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r ){
            let middle = Math.floor((l + r) / 2);
            if (nums[middle] == target) return middle;

            if (nums[middle] >= nums[l]){
                if(target < nums[l] || target > nums[middle]) l = middle + 1
                else r = middle - 1;
            }

            else{
                if(target < nums[middle] || target > nums[r]) r = middle - 1
                else l = middle +1;
            }
            
        }
        return -1;

    }
}
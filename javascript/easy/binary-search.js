/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid = Math.floor((low + high) / 2);
    while(high >= low){
        let mid = Math.floor((low + high) / 2);

        if(nums[mid] == target) return mid;

        if(nums[mid] < target) low = mid + 1;

        if(nums[mid] > target) high = mid - 1;
    }
    return -1;
};

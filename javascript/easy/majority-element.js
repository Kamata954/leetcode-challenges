class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let obj = {}
        let greatestNumber = 0;
        let result = 0;
        for (let num of nums) {
            if(obj[num] == undefined){
                obj[num] = 0;
            }
            obj[num] += 1;
        }
        
        Object.keys(obj).forEach(key => {
            if(obj[key] > greatestNumber ) {
                greatestNumber = obj[key]
                result = key;
            }
        })
        return result;
    }
}
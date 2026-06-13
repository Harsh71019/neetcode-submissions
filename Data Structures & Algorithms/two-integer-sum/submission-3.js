class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map();
        for(let i = 0; i < nums.length; i++) {
            if(seen.has(nums[i])) {
                return [seen.get(nums[i]), i]
            } else {
                let numberToFind = target - nums[i];
                seen.set(numberToFind, i)
            }
        }
    }
}

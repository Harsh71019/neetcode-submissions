class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map();

        for (let i = 0; i < nums.length; i++) {
            let currentElement = nums[i];
            if (seen.has(currentElement)) {
                return [seen.get(currentElement), i];
            } else {
                let numberToFind = target - currentElement;
                seen.set(numberToFind, i);
            }
        }
        return [];
    }
}

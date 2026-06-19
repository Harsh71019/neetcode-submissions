class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Map();
        for (let i = 0; i < nums.length; i++) {
            let currentNumber = nums[i];
            if (seen.has(currentNumber)) {
                return true;
            }

            seen.set(currentNumber, true);
        }

        return false;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Map();

        for (let num of nums) {
            if (!seen.has(num)) {
                seen.set(num, true);
            } else {
                return true;
            }
        }

        return false;
    }
}

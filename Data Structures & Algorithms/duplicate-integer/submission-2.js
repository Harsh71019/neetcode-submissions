class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Map();

        for(let num of nums) {
            if(seen.has(num)) {
                return true;
            } else {
                seen.set(num, (seen.get(num) || 0) + 1)
            }
        }

        return false;
    }
}

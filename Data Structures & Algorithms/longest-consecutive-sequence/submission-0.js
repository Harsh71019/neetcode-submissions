class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0
        let seen = new Set(nums);

        for(const num of seen) {
            if(!seen.has(num - 1)) {
                let length = 1

                while(seen.has(num + length)) {
                    length++
                }

                longest = Math.max(longest, length)
            }
        }

        return longest
    }
}

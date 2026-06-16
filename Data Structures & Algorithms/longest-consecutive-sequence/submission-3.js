class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sanitizedNum = new Set(nums);
        let longest = 0;

        for (let number of sanitizedNum) {
            if (!sanitizedNum.has(number - 1)) {
                let currentStreak = 1;
                let currentNumber = number;

                while(sanitizedNum.has(currentNumber + 1)) {
                    currentNumber += 1;
                    currentStreak += 1;
                }

                longest = Math.max(currentStreak, longest)
            }
        }

        return longest;
    }
}

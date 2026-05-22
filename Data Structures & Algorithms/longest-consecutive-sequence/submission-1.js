class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        let numsSet = new Set(nums);

        for(let num of numsSet) {
            if(!numsSet.has(num - 1)) {
                let currentNumber = num;
                let currentStreak = 1;

                while(numsSet.has(currentNumber + 1)) {
                    currentNumber += 1;
                    currentStreak += 1;
                }

                longest = Math.max(currentStreak, longest);
            }
        }

        return longest;
    }
}

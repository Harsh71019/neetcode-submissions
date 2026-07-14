class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let result = [];
        let answer = Array.from({ length: nums.length + 1 }, () => []);
        let seen = new Map();

        for (let i = 0; i < nums.length; i++) {
            let currentNumber = nums[i];
            seen.set(currentNumber, (seen.get(currentNumber) || 0) + 1);
        }

        for (let [num, count] of seen) {
            answer[count].push(num);
        }

        for (let i = answer.length - 1; i >= 0; i--) {
            let currentArray = answer[i];

            if (currentArray.length !== 0) {
                for (let i = 0; i < currentArray.length; i++) {
                    if (result.length !== k) {
                        result.push(currentArray[i]);
                    }
                }
            }
        }
        return result;
    }
}

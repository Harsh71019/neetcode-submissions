class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let seen = new Map();
        let answer = [];

        for (let num of nums) {
            seen.set(num, (seen.get(num) || 0) + 1);
        }

        let result = Array.from({ length: nums.length + 1 }, () => []);

        for (let [num, count] of seen) {
            result[count].push(num);
        }

        for (let i = result.length - 1; i >= 0; i--) {
            let finalArray = result[i];

            if (finalArray.length) {
                for (let num of finalArray) {
                    answer.push(num);

                    if (k === answer.length) {
                        return answer;
                    }
                }
            }
        }
    }
}

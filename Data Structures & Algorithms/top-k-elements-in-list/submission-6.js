class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let answer = [];
        let seen = new Map();

        for (let number of nums) {
            seen.set(number, (seen.get(number) || 0) + 1);
        }

        let result = Array.from({ length: nums.length + 1 }, () => []);

        for (let [count, number] of seen) {
            result[number].push(count);
        }

        for (let i = result.length - 1; i >= 0; i--) {
            let currentArray = result[i];

            if (currentArray.length !== 0) {
                for (let num of currentArray) {
                    if (answer.length === k) {
                        return answer;
                    } else {
                        answer.push(num);
                    }
                }
            }
        }

        return answer;
    }
}

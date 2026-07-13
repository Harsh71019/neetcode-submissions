class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
          let result = [];
    let answer = Array.from({
        length: nums.length + 1
    }, () => []);

    let seen = new Map();

    for (let num of nums) {
        seen.set(num, (seen.get(num) || 0) + 1);
    }

    for (let [num, index] of seen) {
        answer[index].push(num)
    }
    console.log(answer)

    for (let i = answer.length - 1; i >= 0; i--) {
        let currentArray = answer[i];

        if (currentArray.length !== 0) {
            for (let number of currentArray) {
                if (number.length !== 0) {
                    if (result.length !== k) {
                        result.push(number)
                    }
                }
            }
        }
    }

    return result;
    }
}

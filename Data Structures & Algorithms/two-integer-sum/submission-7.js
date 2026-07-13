class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    let seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];

        if (seen.has(currentNumber)) {
            return [seen.get(currentNumber), i]
        } else {
            let numberToFind = target - currentNumber;
            seen.set(numberToFind, i)
        }
    }

    return null
    }
}

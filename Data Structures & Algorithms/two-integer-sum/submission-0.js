class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map()

        for(let i = 0; i < nums.length; i++) {
            let number = nums[i]
            if(seen.has(number)) {
                return [seen.get(number), i]
            } else {
                let numberToFind = target - number
                seen.set(numberToFind, i)
            }
        }
        return false
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = {} 
        for(let i = 0; i < nums.length; i++) {
            let number = nums[i]
            if(seen[number] !== undefined) {
                return true 
            }
            seen[number] = true
        }
        return false
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let left = 1; 
        let right = 1;

        let result = Array.from({
            length: nums.length,
        }, () => 1);

        for(let i = 0; i < nums.length; i++) {
            result[i] = left * result[i];
            left = left * nums[i]
        }

        for(let i = nums.length - 1; i >= 0; i--) {
            result[i] = right * result[i];
            right = right * nums[i] 
        }

        return result;
    }
}

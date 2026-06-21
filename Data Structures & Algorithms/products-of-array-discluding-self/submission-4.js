class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let answer = Array.from({ length: nums.length });
        let left = 1;
        let right = 1;

        for (let i = 0; i < nums.length; i++) {
            answer[i] = left;
            left = left * nums[i];
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            answer[i] = answer[i] * right;
            right = right * nums[i];
        }

        return answer;
    }
}

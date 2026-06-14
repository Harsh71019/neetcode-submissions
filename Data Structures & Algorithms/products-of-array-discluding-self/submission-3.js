class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let left = 1;
        let right = 1;
        let answer = [];

        for(let i = 0; i < nums.length; i++) {
            answer[i] = left;
            left = nums[i] * left; 
        }

        for(let i = nums.length - 1; i >= 0; i--) {
            answer[i] = answer[i] * right;
            right = nums[i] * right;
        }
         
         return answer;
    }
}

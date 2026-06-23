class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let answer = Array.from(
            {
                length: nums.length,
            },
            () => 1,
        );
        let left = 1;
        let right = 1;

        for (let i = 0; i < nums.length; i++) {
            answer[i] = left * answer[i];
            left = nums[i] * left;
        }

        for (let i = nums.length - 1; i >= 0; i-- ) {
            answer[i] = right * answer[i];
            right = nums[i] * right;
        }

        return answer;
    }
}

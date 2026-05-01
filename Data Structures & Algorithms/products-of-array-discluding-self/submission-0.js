class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let answer = new Array(n)

        answer[0] = 1
        for(let i = 1; i < n;  i++) {
            answer[i] = answer[i - 1] * nums[i - 1]
        }

        let right = 1

        for(let i = n - 2; i >= 0; i--) {
            right = right * nums[i + 1]
            answer[i] = right * answer[i]
        }

        return answer
    }
}

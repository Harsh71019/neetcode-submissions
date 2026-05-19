class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
         let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // Min is in the right half (excluding mid)
            left = mid + 1;
        } else {
            // Min is in the left half (including mid)
            right = mid;
        }
    }

    return nums[left]; // left === right, converged on minimum
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
         let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);

    if (nums[mid] > nums[r]) {
      // min is in the RIGHT half
      // e.g. [3,4,5,6,1,2] → mid=5, r=2 → min must be right of mid
      l = mid + 1;
    } else {
      // min is in the LEFT half (mid could BE the min, so don't exclude it)
      // e.g. [1,2,3,4,5,6] → mid=3, r=6 → min could be mid or left of mid
      r = mid;
    }
  }

  // l === r, both pointers landed on the minimum
  return nums[l];
    }
}

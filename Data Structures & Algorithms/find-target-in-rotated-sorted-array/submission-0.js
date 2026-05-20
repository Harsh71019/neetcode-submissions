class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
            let lo = 0;
    let hi = nums.length - 1;

    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);

        if (nums[mid] === target) return mid;

        // Left half is sorted
        if (nums[lo] <= nums[mid]) {
            if (nums[lo] <= target && target < nums[mid]) {
                hi = mid - 1;   // target is in sorted left half
            } else {
                lo = mid + 1;   // target must be in right half
            }
        }
        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[hi]) {
                lo = mid + 1;   // target is in sorted right half
            } else {
                hi = mid - 1;   // target must be in left half
            }
        }
    }

    return -1;

    }
}

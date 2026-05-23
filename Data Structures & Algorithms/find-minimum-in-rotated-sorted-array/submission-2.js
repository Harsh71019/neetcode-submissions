class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let smallest = Infinity; // start with the largest possible value
        for (let num of nums) {
            if (smallest > num) {
                // found something smaller? update
                smallest = num;
            }
        }
        return smallest;
    }
}

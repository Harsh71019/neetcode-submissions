class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
  let numsSet = new Set(nums);

  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let currentNumber = num;
      let longestStreak = 1;

      while (numsSet.has(currentNumber + 1)) {
        longestStreak += 1;
        currentNumber += 1;
      }

      longest = Math.max(longest, longestStreak);
    }
  }

  return longest;
    }
}

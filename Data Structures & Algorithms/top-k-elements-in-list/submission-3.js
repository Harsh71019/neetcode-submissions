class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      if (nums.length === 0) return [];

        const freqMap = new Map();
        
        // Count frequencies
        for (let num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        // Bucket sort: index = frequency
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        
        for (let [num, count] of freqMap) {
            buckets[count].push(num);
        }

        const result = [];
        
        // Collect from highest frequency to lowest
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                for (let num of buckets[i]) {
                    result.push(num);
                    if (result.length === k) {
                        return result;
                    }
                }
            }
        }
        
        return result; // In case k is larger than unique elements
    }
}

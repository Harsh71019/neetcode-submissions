class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let seen = new Map() 

        for(let number of nums) {
         seen.set(number, (seen.get(number) || 0) + 1)
        }

        let bucket = Array.from({length: nums.length + 1}, () => [])

        for(let [number, count] of seen) {
            bucket[count].push(number)
        }

        let result = []

        for(let i = bucket.length - 1; i >= 0; i--) {
            for(let number of bucket[i]) { 
                result.push(number)
                if(result.length === k) {
                    return result
                }
            }
        }
     }
}

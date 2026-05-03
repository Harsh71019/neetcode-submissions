class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxFreq = 0;
        const count = Array.from({ length : 26}, () => [])

        for(let right = 0; right < s.length; right++) {
            let charRightIndex = s.charCodeAt(right) - 65;
            count[charRightIndex]++;
            maxFreq = Math.max(maxFreq, count[charRightIndex])
            
            // main logic into picture here 

            let maxWindow = right - left + 1;
            let maxReplace = maxWindow - maxFreq;

            if(maxReplace > k) {
                let charLeftIndex = s.charCodeAt(left) - 65;
                count[charLeftIndex]--;
                left++;
            }
        }

        return s.length - left;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLen = 0;
        let lastSeen = new Map();

        for (let right = 0; right < s.length; right++) {
            let char = s[right];

            if (lastSeen.has(char) && lastSeen.get(char) >= left) {
                left = lastSeen.get(char) + 1;
            }

            lastSeen.set(char, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}

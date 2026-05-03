class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let left = 0;
        let seen = new Set();

        for (let right = 0; right < s.length; right++) {
            let char = s[right];

            while (seen.has(char)) {
                seen.delete(s[left]);
                left++;
            }

            seen.add(char);
            longest = Math.max(longest, right - left + 1);
        }

        return longest;
    }
}

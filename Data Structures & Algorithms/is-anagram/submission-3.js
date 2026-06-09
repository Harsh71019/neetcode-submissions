class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let seen = new Map();

        for (let char of s) {
            seen.set(char, (seen.get(char) || 0) + 1);
        }

        for (let char of t) {
            if (seen.get(char) > 0) {
                seen.set(char, seen.get(char) - 1);
            } else {
                return false;
            }
        }
        return true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }

        let seen = {}

        for(let i = 0; i < s.length; i++) {
            let char = s[i]
            seen[char] = (seen[char] || 0) + 1
        }

        for(let char of t) {
            if(!seen[char]) {
                return false
            }
            seen[char]--
        }

        return true
    }
}

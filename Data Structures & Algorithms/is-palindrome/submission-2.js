class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newString = "";
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        for (let i = cleaned.length - 1; i >= 0; i--) {
            newString += cleaned[i];
        }

        return cleaned === newString;
    }
}

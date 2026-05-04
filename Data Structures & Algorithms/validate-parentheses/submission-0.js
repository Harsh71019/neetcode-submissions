class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = {
            "}": "{",
            "]": "[",
            ")": "("
        }

        let stack = [];

        for(let char of s) {
            if(char in map) {
                const top = stack.pop();

                if(top !== map[char]) {
                    return false 
                }
            } else {
                stack.push(char)
            }
        }

        return stack.length === 0;
    }
}

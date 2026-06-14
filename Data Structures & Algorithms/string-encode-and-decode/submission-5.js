class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (let i = 0; i < strs.length; i++) {
            let word = strs[i];

            result += `${word.length}#${word}`;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let answer = [];
        let i = 0;

        while(i < str.length) {
            let j = i;

            while(str[j] !== '#') {
                j++
            }

            let length = parseInt(str.substring(i , j));
            let word = str.substring(j + 1, j + length + 1);
            answer.push(word);
            i = j + 1 + length;
        }

        return answer;
    }
}

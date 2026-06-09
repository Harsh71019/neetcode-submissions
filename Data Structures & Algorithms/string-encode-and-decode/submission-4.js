class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let word of strs) {
            result += `${word.length}#${word}`;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) {
            return [];
        }

        let answer = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            let length = parseInt(str.substring(i, j));
            i = j + 1;

            let word = str.substring(i, i + length);

            answer.push(word);

            i = i + length;
        }
        return answer;
    }
}

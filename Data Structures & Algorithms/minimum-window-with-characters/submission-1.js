class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return "";
        }

        let uniqueCharMap = new Map();

        for (let char of t) {
            uniqueCharMap.set(char, (uniqueCharMap.get(char) || 0) + 1);
        }

        let uniMapSize = uniqueCharMap.size;
        let left = 0;
        let rightIndex = -1;
        let leftIndex = -1;
        let responseLenght = Infinity;
        let strMap = new Map();
        let have = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right];

            strMap.set(char, (strMap.get(char) || 0) + 1);

            if (uniqueCharMap.has(char) && uniqueCharMap.get(char) === strMap.get(char)) {
                have++;
            }

            while (uniMapSize === have) {
                if (right - left + 1 < responseLenght) {
                    responseLenght = right - left + 1;
                    rightIndex = right;
                    leftIndex = left;
                }

                let leftChar = s[left];
                strMap.set(leftChar, strMap.get(leftChar) - 1);

                if (
                    uniqueCharMap.has(leftChar) &&
                    uniqueCharMap.get(leftChar) > strMap.get(leftChar)
                ) {
                    have--;
                }
                left++;
            }
        }
        return leftIndex === -1 ? "" : s.slice(leftIndex, rightIndex + 1);
    }
}

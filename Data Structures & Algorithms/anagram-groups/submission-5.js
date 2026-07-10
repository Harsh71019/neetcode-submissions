class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let seen = new Map();
        let result = [];

        for(let word of strs) {
            let wordSorted = word.split("").sort().join("");
            
            if(seen.has(wordSorted)) {
                seen.get(wordSorted).push(word)
            } else {
                seen.set(wordSorted, [word])
            }
        }

        return Array.from(seen.values())
    }
}

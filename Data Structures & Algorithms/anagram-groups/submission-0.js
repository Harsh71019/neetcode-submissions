class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let seen = new Map()

        for(let i = 0; i < strs.length; i++) {
            let currentWord = strs[i]
            let sortedWord = currentWord.split("").sort().join()

            if(seen.has(sortedWord)) {
                seen.get(sortedWord).push(currentWord)
            } else {
                seen.set(sortedWord, [currentWord])
            }
        }

        return Array.from(seen.values())
    }
}

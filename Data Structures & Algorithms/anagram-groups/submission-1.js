class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

    for (let word of strs) {
        // Step 1: Create a sorted version of the word as the key
        const sortedWord = word.split("").sort().join("");

        if (map.has(sortedWord)) {
            // If this sorted key already exists, add the word to its group
            map.get(sortedWord).push(word);
        } else {
            // If this is the first time seeing this sorted key, create a new group
            map.set(sortedWord, [word]);
        }
    }

    // Step 2: Return all the groups as an array of arrays
    return Array.from(map.values());
    }
}

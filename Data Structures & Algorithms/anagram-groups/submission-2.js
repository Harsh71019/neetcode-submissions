class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let seen = new Map();

  for (let word of strs) {
    let sortedWord = word.split('').sort().join('');

    if (seen.has(sortedWord)) {
      seen.get(sortedWord).push(word);
    } else {
      seen.set(sortedWord, [word]);
    }
  }
  
  return Array.from(seen.values())
    }
}

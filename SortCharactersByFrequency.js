/**
 * Variables:
 *      result: array that holds string characters in frequency order
 *      hash: hash table with key-val pair of character-frequency
 *      bucket: array to serve as bucket for bucket sorting
 * Loop through each character in s and store them in hash
 * Loop through each key in hash and store them in appropriate bucket index based on their frequency (frequency = index)
 * Loop through each bucket starting from the end (so it's descending order) and add the characters onto result array
 * Return a stringified version of result by join all characters together
 */

const frequencySort = (s) => {
  let hash = {};
  let bucket = new Array(s.length).fill(null);
  let result = [];
  //build hash table
  for (const char of s) {
    hash[char] ? hash[char]++ : (hash[char] = 1);
  }
  //place characters in correct bucket
  for (const key in hash) {
    const freq = hash[key];
    bucket[freq] ? bucket[freq].push(key) : (bucket[freq] = [key]);
  }
  //build solution string based on bucket order
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i] !== null) {
      for (const char of bucket[i]) {
        result.push(char.repeat(i));
      }
    }
  }
  return result.join("");
};

/**
 * N - number of characters in s
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

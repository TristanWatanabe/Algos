/**
 * Variables:
 *      hash - hash table that stores character - number of occurences as key-value pair
 * Iterate over the string once and add to hash each unique character
 *      - if character is already in hash, increment it's value by 1
 * Iterate over string again
 *      - check if the key value pair in hash for current character is equal to 1
 *          - if yes, return index i
 * Return -1 since there's no unique character in string
 */

const firstUniqChar = s => {
  let hash = {};
  for (const char of s) {
    hash[char] ? hash[char]++ : (hash[char] = 1);
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (hash[char] === 1) return i;
  }
  return -1;
};

/**
 * N - number of characters in string
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

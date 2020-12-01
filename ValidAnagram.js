/**
 * Variables:
 *  hash - hash table to hold characters of s
 * Loop through each character in s and store in hash
 * Loop through each character in t
 *  - if value of hash at current character is less than zero or does not exist, return false since it guarantees the two
 *      words are not anagrams
 * Since we never returned false in the previous loop, we can return true here
 */

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let hash = {};
  for (const char of s) {
    hash[char] ? hash[char]++ : (hash[char] = 1);
  }

  for (const char of t) {
    if (hash[char] < 0 || !hash[char]) return false;
    hash[char]--;
  }
  return true;
};

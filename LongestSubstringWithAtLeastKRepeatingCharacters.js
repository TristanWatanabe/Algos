/**
 * MAIN: s,k
 *  - return helper function by passing 0 as start, s.length as end, and as and k as parameters
 *
 * HELPER: startIndex, endIndex, s, k
 *  Base: if end is greater than k, return 0 because this means that current string length is less than k which makes it invalid
 *  Have a variable hash to store characters and their frequency
 *  Loop through from start to end and fill out the hash table
 *  Loop through from start to end again
 *      - if current character's frequency is less than k
 *          - return the max of a recursion from start to current character index
 *            and current character index + 1 to end
 *  If we never enter the recursive case in previous loop, that means all characters from start to end have at least k characters
 *  so Return end minus start (number of characters between end and start)
 */

const longestSubstring = (s, k) => {
  return helper(0, s.length, s, k);
};
const helper = (start, end, s, k) => {
  if (end < k) return 0;
  let hash = {};
  for (let i = start; i < end; i++) {
    const char = s[i];
    hash[char] ? hash[char]++ : (hash[char] = 1);
  }
  for (let i = start; i < end; i++) {
    const char = s[i];
    if (hash[char] < k) {
      return Math.max(helper(start, i, s, k), helper(i + 1, end, s, k));
    }
  }
  return end - start;
};

/**
 * N - number of characters in string
 * Time Complexity: O(N^2) - O(N) to go through helper * O(N) for 1 recursive call
 * Space Complexity: O(N) - space used for recursive call stack
 *
 */

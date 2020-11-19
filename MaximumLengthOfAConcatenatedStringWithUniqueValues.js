/**
 * Main: arr
 *  Variables:
 *      max - holds max number of characters that are unique
 *  Call traverse function starting at zero while also passing arr and an empty string
 *  Retun max
 *
 * Traverse: index, arr, currentString
 *  Base Case: if index is higher than arr.length OR currentString is NOT unique, just return and do nothing
 *  Recursive Case:
 *      -have max equal to whichever is greater max or currentString.length
 *      -loop from start to end of array
 *          - push arr[i] to currentString array
 *          - call traverse with i+1 and currentString
 *          - pop from currentString
 * IsUnique: string
 *  Have hash table to store characters
 *  Loop through each character in string
 *     - if character is in hash already, return false
 *     - else add character to hash
 *   Return True
 */

const maxLength = (arr) => {
  let max = 0;

  const traverse = (start, arr, str) => {
    if (start > arr.length) return;
    if (!isUnique(str)) return;
    let strLength = str.join("").length;
    max = Math.max(max, strLength);
    for (let i = start; i < arr.length; i++) {
      str.push(arr[i]);
      traverse(i + 1, arr, str);
      str.pop();
    }
  };

  const isUnique = (s) => {
    s = s.join("");
    let hash = {};
    for (const char of s) {
      if (hash[char] !== undefined) return false;
      else hash[char] = 1;
    }
    return true;
  };

  traverse(0, arr, []);
  return max;
};

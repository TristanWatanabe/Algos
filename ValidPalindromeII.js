/**
 * Main: str
 *  Variables:
 *      left - pointer for left side of string starting at first index
 *      right - pointer for right side of string starting at last index
 *  Loop while left is less than or equal to right
 *      - If character at index left is not equal to character at index right
 *          - call helper function isPalindrome with the left pointer moved forward
 *             and also call helper function isPlalindrome with the right pointer moved backwards
 *              - if either one returns true, then return true
 *              - else return false since the string cant be a valid palindrome
 *  Return true if it gets to this point since that means that the string was valid without needing to delete anything
 */

const validPalindrome = (s) => {
  let left = 0,
    right = s.length - 1;
  while (left <= right) {
    if (s[left] !== s[right]) {
      if (isPalindrome(left + 1, right, s) || isPalindrome(left, right - 1, s))
        return true;
      else return false;
    } else {
      left++, right--;
    }
  }
  return true;
};

const isPalindrome = (left, right, str) => {
  while (left <= right) {
    if (str[left] !== str[right]) return false;
    left++, right--;
  }

  return true;
};

/**
 * N - number of characters in string
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

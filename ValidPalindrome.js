/**
 * Variables:
 *  low - low pointer starting at the first character of s
 *  high - high pointer starting at the last character of s
 * Remove characters in s that are not a to z or 0 to 9
 * Loop while low is less than or equal to high
 *  -if character at pointer low is not equal to character at pointer high, return false
 *  -increment low pointer and decrement high pointer
 * Since we never returned false, return true
 */

const isPalindrome = (s) => {
  const reg = /[a-z0-9]/i;
  s = s
    .split("")
    .filter((char) => char.match(reg))
    .join("")
    .toLowerCase();
  let low = 0,
    high = s.length - 1;
  while (low <= high) {
    if (s[low] !== s[high]) return false;
    low++, high--;
  }
  return true;
};

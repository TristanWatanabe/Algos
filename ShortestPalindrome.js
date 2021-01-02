/*
    Have a reversed version of the string as a variable
    Loop through S and compare the current whole string with the reversed string
        if substring of S is equal to substring of reversed (means we've found the shortest palindrome)
            -append  reverse substring from zero to i to S and then return
    Return empty string for edge case where S is an empty string

*/

const shortestPalindrome = (s) => {
  let length = s.length;
  let reverse = s.split("").reverse().join("");
  for (let i = 0; i < length; i++) {
    if (s.substring(0, length - i) === reverse.substring(i))
      return reverse.substring(0, i) + s;
  }
  return "";
};

/**
 * N - number of characters in S
 * Time Complexity: O(N^2)
 * Space Complexity: O(N)
 */

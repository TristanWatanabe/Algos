/* Convert input to string 
   Compare input string to a reversed version of it and return it's boolean result 
*/

const isPalindrome = (x) => {
  return x.toString() === x.toString().split("").reverse().join("");
};

/**
 * N - number of numbers in input
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

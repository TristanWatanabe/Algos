/**
 * Find the digital root of the input number and return it
 *  - if the number is equal 0, then 0 is the digital root
 *  - if the number divided by 9 has a remainder of zero, then 9 is the digital root
 *  - else: the digital root will be the remainder of the number divided by 9
 */

const addDigits = (num) => {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
};

/**
 * N - input number
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

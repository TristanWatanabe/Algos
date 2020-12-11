/**
 * Variables:
 *  odds - array of odd numbers
 *  evens - array of even numbers
 * Loop through each number in array
 *  - if number is even, push to evens array
 *  - else, push to odds array
 * Return a concatenated version of evens and odds with evens being first
 */

const sortArrayByParity = (A) => {
  let evens = [],
    odds = [];
  for (const num of A) {
    if (num % 2 === 0) evens.push(num);
    else odds.push(num);
  }
  return evens.concat(odds);
};

/**
 * N - number of elements in array
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

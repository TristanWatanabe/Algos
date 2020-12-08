/**
 * Variables:
 *      globalSum: max sum subarray
 *      localSum: sum of current sequence of adjacent numbers in array
 * Loop through each number in array
 *  - if current number is greater than the localSum + current number
 *      = set localSum to equal current number
 *  - else add current number to localSum
 *  - set globalSum to equal the max between localSum and globalSum
 * Return globalSum
 */

const maxSubArray = (nums) => {
  let globalSum = -Infinity;
  let localSum = -Infinity;
  for (const num of nums) {
    localSum = Math.max(num, localSum + num);
    globalSum = Math.max(globalSum, localSum);
  }
  return globalSum;
};

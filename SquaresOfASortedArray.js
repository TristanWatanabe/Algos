/**
 * Variables:
 *      result - sorted array with values squared
 *      left - index pointer starting at 0
 *      right - index pointer starting at the last element of array (aka the greatest value since input is sorted)
 * Loop while left is less than or equal to right
 *      if absolute value at pointer left is greater than absolute value at pointer right
 *          - push value at pointer left
 *          - increment left
 *      else
 *          - push value at pointer right
 *          - decrement right
 * Reverse result since this is currently sorted in descending order
 * Return result
 */

const sortedSquares = (A) => {
  let result = [];
  let left = 0,
    right = A.length - 1;
  while (left <= right) {
    const val1 = Math.abs(A[left]);
    const val2 = Math.abs(A[right]);
    //we look for the greater value because we know for sure that the last element in input array is the highest
    if (val1 >= val2) {
      result.push(Math.pow(val1, 2));
      left++;
    } else {
      result.push(Math.pow(val2, 2));
      right--;
    }
  }
  //reverse result since it's currently sorted in descending order
  return result.reverse();
};

/**
 * N - number of elements in input array
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

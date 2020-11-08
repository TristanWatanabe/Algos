/**
 * MAIN: nums
 *  Variables:
 *      result = array of all combinations
 *  Call helper function
 *  Return result
 *
 * HELPER: curr(array of 1 combination), result, nums
 *  Base Case: if nums array is empty, push curr to result
 *  Recursive Case:
 *      Loop from 0 to nums.length
 *          - push to curr element at index i
 *          - recursively call helper function with nums modified to exclude element at index i
 *          - pop from curr
 */

const permute = (nums) => {
  let result = [];
  helper([], result, nums);
  return result;
};

const helper = (curr, result, nums) => {
  if (!nums.length) {
    result.push([...curr]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    curr.push(nums[i]);
    let newArr = nums.slice(0, i).concat(nums.slice(i + 1));
    helper(curr, result, newArr);
    curr.pop();
  }
};

/**
 * N - number of elements in array
 * Time Complexity: O(N!)
 * Space Complexity: O(N!)
 */

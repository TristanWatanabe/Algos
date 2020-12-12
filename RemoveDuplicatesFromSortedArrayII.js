/**
 * Variables:
 *  prev - previous number
 *  count - how often the previous number has occured
 * Loop from end to beginning of array
 *  - If prev not equal to current number
 *      - set prev to equal current number and count to equal 1
 *  - If current number is equal to prev and count is equal to 2
 *      - swap the values of the current index and last index of arrays
 *      - pop the end of array to remove duplicate number
 *  - else
 *      - increment count
 * Sort input array in ascending order
 * Return sorted array's length
 *
 */

const removeDuplicates = (nums) => {
  let prev = null;
  let count = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    const last = nums[nums.length - 1];
    if (prev !== num) {
      prev = num;
      count = 1;
    } else if (prev === num && count == 2) {
      nums[i] = last;
      nums[nums.length - 1] = num;
      nums.pop();
    } else {
      count++;
    }
  }

  return nums.sort((a, b) => a - b).length;
};

/**
 * N - number of elements in array
 * Time Complexity: O(NLogN)
 * Space Complexity: O(1)
 */

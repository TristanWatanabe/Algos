/**
 * Variable:
 *      index: keeps track of which index in input array will be modified with a non zero available
 * Loop through array
 *      if current number is not zero
 *          - set array at index to equal this number
 *          - increment index
 * Loop from index to array length and set the remaining elements to zero
 */

const moveZeroes = (nums) => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num !== 0) {
      nums[index] = num;
      index++;
    }
  }
  while (index < nums.length) nums[index++] = 0;
  return nums;
};

/**
 * N - number of elements in input array
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

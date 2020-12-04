/**
 * Variables:
 *     duplicates: array to hold all duplicate numbers
 * Since the numbers in array can only be from 1 to N, we can treat those as indices to mark numbers we've already seen
 * Iterate through array and mark index at num-1 to be a negative
 *      -if we try to mark an already negative number index, then that means we've seen that number already
 *          - - add to duplicates array
 *      -else : mark num-1 to be a negative
 * Return duplicates
 */

const findDuplicates = (nums) => {
  let duplicates = [];
  for (const num of nums) {
    const x = Math.abs(num);
    if (nums[x - 1] < 0) {
      duplicates.push(x);
    } else {
      nums[x - 1] = -nums[x - 1];
    }
  }
  return duplicates;
};

/**
 * N - number of elements in array
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

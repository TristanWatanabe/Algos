/**
 * Variables:
 *      max: keeps track of max number in current sliding window
 *      left: pointer for left side of sliding window
 *      right: pointer for right side of sliding window
 *      result: array to hold max values per sliding window
 * Loop while left is less than or equal to nums length minus k
 *      - set max to equal the max between current max and current number
 *      - if number of elements in sliding window is equal to k
 *          - push max to result
 *          - if num at pointer left is equal to current max
 *              - set max to equal -Infinity again since we'll have to find another max
 *              - set right pointer to equal left since we have to start over and find a new max in new sliding window
 *          - increment left pointer to move sliding window forward
 *      - increment right pointer to increase sliding window
 * Return result
 */

const maxSlidingWindow = (nums, k) => {
  let max = -Infinity;
  let result = [];
  let left = 0,
    right = 0;
  while (left <= nums.length - k) {
    const num = nums[right];
    max = Math.max(max, num);
    if (right - left + 1 === k) {
      result.push(max);
      //reset max and right pointer since the last max is removed from sliding window and we have to determine a new max
      if (nums[left] === max) {
        max = -Infinity;
        right = left;
      }
      //move left pointer forward
      left++;
    }
    //move right pointer forward
    right++;
  }
  return result;
};

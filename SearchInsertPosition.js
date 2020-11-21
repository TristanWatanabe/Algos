/**
 * Variables:
 *      - left: pointer for left side of array
 *      - right: pointer for right side of array
 *  Do as Binary Search by looping while left is less than or equal to right
 *      - calculate midpoint by adding left and right and dividing by 2
 *      - if nums at midpoint is equal to target, return midpoint
 *      - else:
 *          - if target is greater than nums at midpoint
 *              - set left to equal midpoint + 1
 *          - else
 *              - set right to equal midpoint - 1
 *  Return left
 */

var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (target === nums[mid]) return mid;
    else {
      if (target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return left;
};

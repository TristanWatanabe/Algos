/**
 * Variables:
 *      left - pointer for left side for binary search
 *      right - pointer for right side for binary search, start at length - k
 * Cases: if the number we're looking for is less than the first element in array, return array sublist from zero to k
 *        if the number we're looking for is greater than the last element in array, return array sublist from arr length - k
 * Loop while left is less than right
 *  - calculate mid index by adding left and right and then dividing by 2
 *  - if x minus array at mid is greater than array at mid + k minus x
 *      - move left pointer to equal mid + 1
 *  - else:
 *      - move right pointer to equal mid
 * Return array sublist from left to left + k
 */

const findClosestElements = (arr, k, x) => {
  if (x < arr[0]) return arr.slice(0, k);
  if (x > arr[arr.length - 1]) return arr.slice(-k);
  let left = 0;
  let right = arr.length - k;
  while (left < right) {
    let mid = Math.floor((right - left) / 2 + left);
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr.slice(left, left + k);
};

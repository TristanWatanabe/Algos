/**
 * Binary Search
 * Variables:
 *  left - left pointer, start at 2
 *  right - right pointer, start at half of x
 * Loop while left is less than or equal right
 *  - Have variable pivot to equal the average of left and right
 *  - Have variable num equal to square of pivot
 *  - If num is greater than x, set right to equal pivot minus 1
 *  - If num is less than x, set left to equal pivot plus 1
 *  - else: return pivot since that's the correct square root
 * Return right
 */

const mySqrt = (x) => {
  if (x < 2) return x;

  let left = 2,
    right = Math.floor(x / 2);
  while (left <= right) {
    const pivot = Math.floor(left + (right - left) / 2);
    const num = pivot * pivot;
    if (num > x) right = pivot - 1;
    else if (num < x) left = pivot + 1;
    else return pivot;
  }
  return right;
};

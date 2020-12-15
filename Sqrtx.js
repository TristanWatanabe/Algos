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

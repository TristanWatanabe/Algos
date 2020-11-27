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
 * Return result
 */

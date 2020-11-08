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

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

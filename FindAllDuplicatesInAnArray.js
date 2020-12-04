/**
 * Variables:
 *     duplicates: array to hold all duplicate numbers
 * Since the numbers in array can only be from 1 to N, we can treat those as indices to mark numbers we've already seen
 * Iterate through array and mark index at num-1 to be a negative
 *      -if we try to mark an already negative number index, then that means we've seen that number already
 *          - - add to duplicates array
 *      -else : mark num-1 to be a negative
 * Return results
 */

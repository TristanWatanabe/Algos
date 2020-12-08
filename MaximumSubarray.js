/**
 * Variables:
 *      globalSum: max sum subarray
 *      localSum: sum of current sequence of adjacent numbers in array
 * Loop through each number in array
 *  - if current number is greater than the localSum + current number
 *      = set localSum to equal current number
 *  - else add current number to localSum
 *  - set globalSum to equal the max between localSum and globalSum
 * Return globalSum
 */

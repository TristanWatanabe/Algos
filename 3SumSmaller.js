/**
 * Sort input array
 * Variables:
 *      result - number of triplets that are less than target
 * Loop through from 0 to array.length - 2
 *     currTotal = target - number at array index i
 *     start - ptr at i+1
 *     end - array.length - 1
 *     Loop while start less than end
 *          if currTotal + array at index start + array at index end is less than target
 *              - add to result everything in between the end and start pointers as any of those numbers
 *                combinations would be less than target
 *              - increment start
 *          else: decrement end
 * Return result
 */

/**
 *
 */

/**
 * Variables:
 *      totalOnes - total number of 1s in input array
 *      maxOnes - max number of 1s in a valid sliding window
 *      windowTotal - current number of 1s in current sliding window
 *      start and end - ptrs to keep track of sliding window
 * Loop starting from index 0 to array length
 *      add to windowTotal data at index end
 *      if window is full
 *          - compare maxOnes to windowTotal and set maxOnes equal to whichever is higher
 *          - subtract data at index start from windowTotal
 *          - increment start ptr
 *      increment end ptr
 * Return totalOnes - maxOnes
 */
const minSwaps = data => {
    
}



 /**
 * N - number of elements in input array
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */
/**
 * Variables:
 *      totalOnes - total number of 1s in input array
 *      maxOnes - max number of 1s in a valid sliding window
 *      windowTotal - current number of 1s in current sliding window
 *      start and end - ptrs to keep track of sliding window
 * While loop
 *      add to windowTotal data at index end
 *      if window is full
 *          - compare maxOnes to windowTotal and set maxOnes equal to whichever is higher
 *          - subtract data at index start from windowTotal
 *          - increment start ptr
 *      increment end ptr
 * Return totalOnes - maxOnes
 */
const minSwaps = (data) => {
  const totalOnes = data.filter((num) => num === 1).length;
  if (totalOnes === 1) return 0;
  let maxOnes = 0,
    windowOnes = 0;
  let start = 0,
    end = 0;
  while (end < data.length) {
    windowOnes += data[end];
    //reached the max the sliding window can be
    if (end - start + 1 === totalOnes) {
      //find the most number of 1s in a max sliding window
      maxOnes = Math.max(maxOnes, windowOnes);
      //remove start value from sliding window total
      windowOnes -= data[start++];
    }
    end++;
  }
  //difference is the number of swaps needed since maxOnes is already the MOST number of 1s that can be in a sliding window
  return totalOnes - maxOnes;
};

/**
 * N - number of elements in input array
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */

/**
 * Constructor: array
 *      original - copy of original input array
 *      shuffled - shuffled version of input array
 *
 * Reset:
 *      - set shuffled back to original array
 *      - return shuffled
 * Shuffle:
 *      - Loop through entire shuffled array
 *          - find a random index and have temp variable hold the value for the element at index random
 *          - set element at random index to equal element at index i
 *          - set element at index i to equal temp variable
 *      - Return shuffled array
 *
 */

class Solution {
  constructor(nums) {
    this.original = nums;
    this.shuffled = [...nums];
  }

  reset() {
    this.shuffled = [...this.original];
    return this.shuffled;
  }

  shuffle() {
    const length = this.shuffled.length;
    for (let i = 0; i < length; i++) {
      let randomIdx = Math.floor(Math.random() * length + 0);
      let temp = this.shuffled[randomIdx];
      this.shuffled[randomIdx] = this.shuffled[i];
      this.shuffled[i] = temp;
    }
    return this.shuffled;
  }
}

/**
 * N - input array
 * Time Complexity: All Operations are O(N)
 * Space Complexity: O(N)
 */

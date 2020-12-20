/**
 * Constructor
 *      set: hash table that holds a key-val pair of val-index
 *      nums: array of current numbers in set
 * Insert: val
 *  -If val is not present in set,
 *      -add it to set and push to nums array
 *      =return true
 *  -Else, return false since its already in the set
 * Remove: val
 *  -If val is present in set
 *      -get index of val in set
 *      -get index of last element in nums array
 *      -set the value at index of val to be the last number in array
 *      =update set index of last value in array to be the index of val
 *      -pop from array
 *      -delete val from set
 *      -return true
 *  -Else, return false since there's nothing to remove
 * getRandom:
 *  -Generate random index using Math.random
 *  -return value at nums at random generated index
 */

class RandomizedSet {
  constructor() {
    this.set = {};
    this.nums = [];
  }
  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element.
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.set[val] === undefined) {
      this.set[val] = this.nums.length;
      this.nums.push(val);
      return true;
    }
    return false;
  }
  /**
   * Removes a value from the set. Returns true if the set contained the specified element.
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (this.set[val] >= 0) {
      let index = this.set[val];
      //swap from nums[index] to nums[nums.length - 1]
      let last = this.nums[this.nums.length - 1];
      this.nums[index] = last;
      //update the index in dictionary to reflect change
      this.set[last] = index;
      this.nums.pop();
      delete this.set[val];
      return true;
    }
    return false;
  }
  /**
   * Get a random element from the set.
   * @return {number}
   */
  getRandom() {
    let max = this.nums.length;
    let min = 0;
    let index = Math.floor(Math.random() * max + min);
    return this.nums[index];
  }
}

/**
 * N - number of elements inserted
 * Time Complexity: O(1) for all
 * Space Complexity: O(N)
 */

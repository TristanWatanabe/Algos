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

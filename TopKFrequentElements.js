/**
 * Use a bucket sort approach
 * Variables:
 *      hash - hash table with key value pair of element-number of appearances
 *      bucket - array initialized to a size of input length + 1
 *      sorted - final flattened array thats sorted by number of appearances
 * Iterate over each element in input array and update hash table accordingly
 * Iterate over each element in hash and update bucket array accordingly
 * Iterate over each element in bucket and push elements to sorted array
 * Return sorted array sliced from input sorted.length - k
 */

const topKFrequent = (nums, k) => {
  let hash = {};
  let bucket = new Array(nums.length).fill(null);
  let sorted = [];
  //Populate hash table with element and number of appearances
  for (const num of nums) {
    hash[num] ? hash[num]++ : (hash[num] = 1);
  }
  //Elements that appear Index number of times will be stored in the bucket array accordingly
  for (const num in hash) {
    const freq = hash[num];
    bucket[freq] === null ? (bucket[freq] = [num]) : bucket[freq].push(num);
  }
  //Add elements to a final flattened sorted array
  for (let i = 1; i < bucket.length; i++) {
    if (bucket[i]) sorted.push(...bucket[i]);
  }
  return sorted.slice(sorted.length - k);
};

/**
 * N - number of elements in input
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

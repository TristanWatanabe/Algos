/**
 * Variables:
 *      map - dictionary to keep track of numbers we've already seen
 *      pairs - number of good pairs in array
 * Loop through each number in array
 *      - If number is not in map, add to map and have it equal to 1
 *      - else, increment pairs by map[number] (since we can make that many more pairs if we discover an identical number)
 *          and then increment map[number] by 1
 * Return pairs
 */

const numIdenticalPairs = (nums) => {
  let map = {},
    pairs = 0;
  for (const num of nums) {
    if (map[num]) {
      pairs += map[num];
      map[num]++;
    } else {
      map[num] = 1;
    }
  }
  return pairs;
};

/**
 * N - number of elements in nums
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

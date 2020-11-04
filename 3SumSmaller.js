/**
 * Sort input array in ascending order
 * Variables:
 *      result - number of triplets that are less than target
 * Loop through from 0 to array.length - 2
 *     currTarget = target - number at array index i
 *     start - ptr at i+1
 *     end - array.length - 1
 *     Loop while start less than end
 *          if array at index start + array at index end is less than currTarget
 *              - add to result everything in between the end and start pointers as any of those numbers
 *                combinations would still be less than currTarget
 *              - increment start
 *          else: decrement end
 * Return result
 */

const threeSumSmaller = (nums, target) => {
  let result = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let currTarget = target - nums[i];
    let start = i + 1,
      end = nums.length - 1;
    while (start < end) {
      if (nums[start] + nums[end] < currTarget) {
        result += end - start;
        start++;
      } else {
        end--;
      }
    }
  }
  return result;
};

/**
 * N - number of elements in array
 * Time Complexity: O(N^2)
 * Space Complexity: O(1)
 */

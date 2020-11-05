/**
 * Variables:
 *      triples - array with all triplets that equal to zero
 *
 * Sort array in ascending order
 * Loop starting from last index of input array to 0
 *      - if curr element is less than 0, break loop because we wont be able to find a triplet that would add up to 0
 *      - if curr element is equal to previous element, skip element in order to avoid duplicates
 *      - left pointer starting at 0 and right pointer starting from index - 1
 * Loop while left is less than right
 *      - variable sum to hold total of curr element, and elements at index left and right
 *      - if sum is less than zero OR the current element at index left is equal to previous element
 *          - increment left pointer
 *      - else if sum is greater than zero OR the current element at index right is equal to previous element
 *          - decrement right pointer
 *      - else if sum is equal to zero
 *          - push to triplets array curr element, and elements at index left and right
 *          - increment left pointer and decrement right pointer
 * Return triplets
 */

const threeSum = (nums) => {
  let triplets = [];
  nums.sort((a, b) => a - b);
  for (let i = nums.length - 1; i >= 0; i--) {
    const curr = nums[i];
    let left = 0,
      right = i - 1;
    if (curr < 0) break;
    if (curr === nums[i + 1]) continue;
    while (left < right) {
      const sum = curr + nums[left] + nums[right];
      if ((left > 0 && nums[left] === nums[left - 1]) || sum < 0) {
        left++;
      } else if (
        (right < i - 1 && nums[right] === nums[right + 1]) ||
        sum > 0
      ) {
        right--;
      } else if (sum === 0) {
        triplets.push([curr, nums[left], nums[right]]);
        left++, right--;
      }
    }
  }
  return triplets;
};

/**
 *
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

/**
 *
 */

const findKthLargest = (nums, k) => {
  let size = nums.length;
  return quickselect(0, size - 1, size - k, nums);
};

const quickselect = (left, right, k_smallest, nums) => {
  //only one element in list
  if (left == right) return nums[left];

  //select random pivot index
  let pivot_index = Math.floor(Math.random() * (right + 1 - left) + left);

  pivot_index = partition(left, right, pivot_index, nums);

  if (k_smallest == pivot_index) {
    // console.log(k_smallest, nums, nums[k_smallest])
    return nums[k_smallest];
  } else if (k_smallest < pivot_index) {
    return quickselect(left, pivot_index - 1, k_smallest, nums);
  } else {
    return quickselect(pivot_index + 1, right, k_smallest, nums);
  }
};

const partition = (left, right, pivot_index, nums) => {
  let pivot = nums[pivot_index];
  //move pivot to end
  swap(pivot_index, right, nums);
  let store_index = left;

  //move all smaller elements to the left
  for (let i = left; i <= right; i++) {
    if (nums[i] < pivot) {
      swap(store_index, i, nums);
      store_index++;
    }
  }
  //move pivot to its final place
  swap(store_index, right, nums);
  return store_index;
};

const swap = (a, b, nums) => {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
};

/**
 * Time Complexity: average case: O(N), worse case: O(N^2)
 * Space Complexity: O(1)
 */

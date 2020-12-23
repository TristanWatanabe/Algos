/*  
    Edge Case: if kth missing is greater than last element in array
    
    Loop while number of missing is less than k, increment index
    return missing number that's between index-1 and index 
    
    Missing helper function: return how many numbers are missing until nums[index]
    
*/

const missingElement = (nums, k) => {
  let n = nums.length;
  //if kth missing number is larger than last element in array
  if (k > missing(n - 1, nums)) return nums[n - 1] + k - missing(n - 1, nums);

  let index = 1;
  //find index such that missing(idx-1) <= k <= missing(idx)
  while (missing(index, nums) < k) index++;
  //kth missing number is greater than nums[idx-1] and less than nums[idx]
  return nums[index - 1] + k - missing(index - 1, nums);
};

/*
    Returns how many numbers are missing until nums[index]
*/
const missing = (index, nums) => {
  return nums[index] - nums[0] - index;
};

/**
 * N - number of elements in array
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

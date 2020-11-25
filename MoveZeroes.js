const moveZeroes = (nums) => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num !== 0) {
      nums[index] = num;
      index++;
    }
  }
  while (index < nums.length) nums[index++] = 0;
  return nums;
};

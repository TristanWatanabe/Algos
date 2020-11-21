/**
 * MAIN: height
 *  Variables:
 *      totalWater: amount of water that can be stored
 *  Loop through each bar and determine how much each bar can hold
 *      - find the max bar on the left side of current bar
 *      - find the max bar on the right side of current bar
 *      - determine the minimum between the two side's max
 *      - if the minimum is greater than current bar, increment totalWater by minimum - current bar
 *  Return current bar
 *
 * FindMax: start, end, height
 *  Variables:
 *      max: highest bar in range
 *  Loop from start to end
 *      - have max equal max between current bar and max
 *  Return max
 */

const trap = (height) => {
  let totalWater = 0;
  for (let i = 0; i < height.length; i++) {
    const curr = height[i];
    const maxLeft = findMax(0, i, height);
    const maxRight = findMax(i + 1, height.length, height);
    const min = Math.min(maxLeft, maxRight);
    if (min > curr) totalWater += min - curr;
  }
  return totalWater;
};

const findMax = (start, end, height) => {
  let max = 0;
  for (let i = start; i < end; i++) {
    max = Math.max(height[i], max);
  }
  return max;
};

/**
 * N - number of bars
 * Time Complexity: O(N^2)
 * Space Complexity: O(1)
 */

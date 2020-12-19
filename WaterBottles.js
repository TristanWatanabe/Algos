const numWaterBottles = (numBottles, numExchange) => {
  let count = numBottles;
  let unused = 0;
  while (numBottles + unused >= numExchange) {
    let bottles = unused + numBottles;
    numBottles = Math.floor(bottles / numExchange);
    unused = bottles % numExchange;
    count += numBottles;
  }
  return count;
};

/**
 * N - number of bottles
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

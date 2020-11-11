/**
 * Variables:
 *      min - lowest possible stock value seen thus far
 *      maxProfit - holds max profit that can be attained
 * Loop from 1 to end of input
 *      - if current price is greater than min
 *          - set maxProfit to equal the larger value between maxProfit and price minus min
 *      - else if price is less than min
 *          - set min to equal price
 * Return maxProfit
 */

const maxProfit = (prices) => {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    if (price > min) {
      maxProfit = Math.max(price - min, maxProfit);
    } else if (price < min) {
      min = price;
    }
  }
  return maxProfit;
};

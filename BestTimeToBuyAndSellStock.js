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

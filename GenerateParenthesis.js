/**
 * MAIN: n
 *  Variables:
 *      result - array to hold all possible string combinations of n*2 length
 *  Call backtrack function to generate all combinations
 *  Return result
 *
 * BACKTRACK: currString, numOfOpenParens, numOfCloseParens, n, reference to result array
 *  Base Case: if valid combination, push currString to result
 *  Two recursive cases to form a valid combination that equals to n*2 length:
 *      If open is less than n, backtrack with currString + "(" and increment open
 *      If close is less than open, backtrack with currString + ")" and increment close
 */

const generateParenthesis = (n) => {
  let result = [];
  backtrack("", 0, 0, n, result);
  return result;
};

const backtrack = (str, open, close, n, result) => {
  if (open === n && close === n) result.push(str);
  if (open < n) backtrack(str + "(", open + 1, close, n, result);
  if (close < open) backtrack(str + ")", open, close + 1, n, result);
};

/**
 * n - input
 * Time Complexity: O(4n/squareroot(n)) - each valid sequence has at most n steps during the backtrack process
 * Space Complexity: O(4n/squareroot(n))
 */

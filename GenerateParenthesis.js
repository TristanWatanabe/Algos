/**
 *
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
 *
 */

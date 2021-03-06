const minAddToMakeValid = (S) => {
  let stack = [];
  let count = 0;
  for (let char of S) {
    if (char === "(") {
      stack.push(char);
    } else {
      if (!stack.length) count++;
      else stack.pop();
    }
  }
  return count + stack.length;
};

/**
 * N - number of characters in s
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

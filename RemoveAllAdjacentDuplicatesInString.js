/**
 * Variables:
 *      stack - stack to hold the characters in input that have no duplicates
 * Loop until end of input string
 *      - if character at top of stack is equal to current character
 *          - pop from stack since that means we've encountered a duplicate
 *      - else: push current character to stack
 * Return all remaining characters in stack in String format
 */

const removeDuplicates = (S) => {
  let stack = [];
  for (const char of S) {
    if (stack[stack.length - 1] === char) stack.pop();
    else stack.push(char);
  }
  return stack.join("");
};

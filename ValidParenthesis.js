/**
 * Variables:
 *     stack - keeps track of all open parenthesis, brackets, braces
 *     dict - dictionary to match appropriate open parenthesis to closing ones
 * Iterate over each character in input string
 *     if open parens
 *      - push to stack
 *     if closing parens
 *      - check if it's a match with what's on top of stack
 *          - if no, return false
 * Return true if stack is empty, else return false
 */

const isValid = str => {
  let stack = [];
  let dict = {
    "[": "]",
    "{": "}",
    "(": ")"
  };
  for (const char of str) {
    if (char === "(" || char === "{" || char === "[") stack.push(char);
    else if (char === ")" || char === "}" || char === "]") {
      if (dict[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0 ? true : false;
};

/**
 * N - number of characters in input string
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

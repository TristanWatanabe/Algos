var minAddToMakeValid = function (S) {
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

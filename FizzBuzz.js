/**
 * Variables:
 *  result: array that holds each iteration's result
 * Loop from 1 to N
 *  - create a variable str initialized as an empty string
 *  - if i is a multiple of 3, append "Fizz" to str
 *  - if i is a multiple of 5, append "Buzz" to str
 *  - push str to result if its not empty, else push i to result
 * Return result
 */

const fizzBuzz = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let str = "";
    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    str.length ? result.push(str) : result.push(i.toString());
  }
  return result;
};

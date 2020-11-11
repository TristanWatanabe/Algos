/**
 * Variable:
 *      x - string version of input
 *      result - holds result value
 * If first character is a negative sign
 *      - set result to equal the reverse of x without excluding the negative sign
 *      - Typecast result to a number
 * Else
 *      - set result to equal the reverse of x
 *      - Typecast result to a number
 * If result doesnt overflow, return result
 * Else return 0
 */

const reverse = (x) => {
  x = x.toString();
  let result = 0;
  if (x[0] == "-") {
    result = Number(x[0] + [...x.slice(1)].reverse().join(""));
  } else {
    result = Number([...x].reverse().join(""));
  }
  return result >= Math.pow(2, 31) || result <= Math.pow(-2, 31) ? 0 : result;
};

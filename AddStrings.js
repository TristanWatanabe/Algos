/*
    Have ans array and variable carry
    Have two ptrs that point to the last char in each string
    Loop while one of the ptrs are not undefined
        To convert from str to number, subtract "0" from the string
        Calculate sum
        if sum greater than 0
            - carry = 1
            - sum = sum%10
        else: carry = 0
        Push to array the sum
        decrement both ptrs
    If there's a carry, push carry to ans array
    Return the array as reversed and then join
*/

const addStrings = (num1, num2) => {
  let ans = [];
  let p1 = num1.length - 1,
    p2 = num2.length - 1;
  let carry = 0;
  while (p1 >= 0 || p2 >= 0) {
    let val1 = num1[p1] ? num1[p1] - "0" : 0;
    let val2 = num2[p2] ? num2[p2] - "0" : 0;
    let sum = val1 + val2 + carry;
    if (sum >= 10) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    ans.push(sum);
    p1--, p2--;
  }
  if (carry) ans.push(carry);
  return ans.reverse().join("");
};

/**
 * N - number of characters in first string
 * M - number of characters in second string
 * Time Complexity: O(max(N, M))
 * Space Complexity: O(max(N,M))
 */

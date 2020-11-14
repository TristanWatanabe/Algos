/**
 * Variables:
 *      s - holds the compression in string format
 *      count - frequency of current character being tracked
 *      prev - previous character seen, used for comparison in conjunction with count
 * Loop through input array starting with the second character up until input array's length
 *      If current character is equal to previous character
 *          - increment count
 *      Else:
 *          - append to s the previous character and count (if count is greater than 1)
 *          - set count back to 1
 *      Set prev to equal current character
 * Loop through each character in s in order to modify input array
 *      Set input array at index i to equal s at index i
 * Loop while input array's length is greater than s's length
 *      Pop from input array
 * Return input array's length
 *
 */

const compress = (chars) => {
  let s = "";
  let count = 1;
  let prev = chars[0];
  //Build compressed string and store to s
  for (let i = 1; i <= chars.length; i++) {
    const char = chars[i];
    if (prev === char) count++;
    else {
      s = s + prev + (count > 1 ? count : "");
      count = 1;
    }
    prev = char;
  }
  //Modify chars array
  for (let i = 0; i < s.length; i++) {
    chars[i] = s[i];
  }
  //Remove excess elements from chars array
  while (chars.length > s.length) {
    chars.pop();
  }
  return chars.length;
};

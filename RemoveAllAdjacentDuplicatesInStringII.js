/**
 * Variables:
 *      stack - holds the last character seen in [char, freq] format
 *      result - string to hold final result
 * Loop through each character in input string
 *      if the stack is not empty and top of stack is equal to current character
 *          - increment the freq of element at top of stack
 *          - if freq at top of stack is equal to k
 *              - pop stack
 *      else: push to stack the character and 1 [char, 1]
 * Reconstruct final result string by using characters left in stack
 * Return result
 */

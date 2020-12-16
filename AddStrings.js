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

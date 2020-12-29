/*
    Edge case: if length of s is less than p, then return empty since no anagram can exist
    Have two hashtables: HashS and HashP
        - HashP will be constant and needs to be populated with counts of each character in P
        - HashS will constantly change and be compared to HashP in order to find any anagram
    Have a low and high ptr and results array
    Loop through each character in S
        if there's too many characters between high and low compared to P
            - use compare helper function to see if HashP equals to HashS
                - if true, push low ptr to results array
            - check if S[low] equals to 1
                -yes, delete key value pair from HashS
                -no, decrement value of HashS[low]
            - increment low ptr
        check if HashS[high] exists
            - yes, increment hashS[high]
            - no, create new key value pair
        increment high ptr
    Return result
    
    Compare Helper function:    
        - Compare hashS and hashP to see if they have the same key value pairs

*/

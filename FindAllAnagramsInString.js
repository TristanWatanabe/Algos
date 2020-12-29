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

const findAnagrams = (s, p) => {
  if (s.length < p.length) return [];
  let hashP = {};
  let hashS = {};
  //build hashtable for all characters in P
  for (let char of p) {
    hashP[char] ? hashP[char]++ : (hashP[char] = 1);
  }
  let low = 0;
  let high = 0;
  let result = [];
  while (high <= s.length) {
    //if there's too many characters in sliding window, compare hashS and hashP and then
    //move slding window to right
    if (high - low === p.length) {
      if (compare(hashS, hashP)) result.push(low);
      hashS[s[low]] === 1 ? delete hashS[s[low]] : hashS[s[low]]--;
      low++;
    }
    hashS[s[high]] ? hashS[s[high]]++ : (hashS[s[high]] = 1);
    high++;
  }
  return result;
};

const compare = (hash1, hash2) => {
  for (let key in hash2) {
    if (hash1[key] !== hash2[key]) return false;
  }
  return true;
};

/**
 * S - number of characters in S
 * P - number of characters in P
 * Time Complexity: O(S + P)
 * Space Complexity: O(1) since hash tables will store at most 26 characters
 */

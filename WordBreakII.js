/**
 * MAIN: s, wordDict (array)
 *  Variables:
 *      - allWordsInDict: concatenated string version of wordDict array
 *      - dict: hash table version of wordDict array for faster word look up
 *      - result: array containing valid word breaks
 *  Loop through each character in s
 *      - if char is not present in allWordsInDict, return empty array since that means there can never be a valid word break
 *  Call findValid to find valid word breaks
 *  Return result
 *
 * FINDVALID: index, curr(array), s, dict, result
 *  If index is equal to length of s, that means we reached the end of string with successful word breaks
 *      - push string version of curr into result
 *      - return
 *  Have variable str as variable to hold current string
 *  Loop from index to end of s
 *      - concatenate current character at s[i] to str
 *      - if str is present in dict
 *          - push str to curr
 *          - call findValid passing i+1 as index and curr
 *          - pop from curr so we can try another possible combination once recursion resolves
 *  Return
 */

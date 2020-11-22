/**
 * Variables:
 *      result: array that holds string characters in frequency order
 *      hash: hash table with key-val pair of character-frequency
 *      bucket: array to serve as bucket for bucket sorting
 * Loop through each character in s and store them in hash
 * Loop through each key in hash and store them in appropriate bucket index based on their frequency (frequency = index)
 * Loop through each bucket starting from the end (so it's descending order) and add the characters onto result array
 * Return a stringified version of result by join all characters together
 */

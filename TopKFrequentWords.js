/**
 * Variables:
 *      hash - hash table with key-val pair of word-frequency
 *      bucket - array of words in buckets sorted by frequency
 *      sortedWords - array of all words sorted by frequency
 * Loop through each word in input array
 *      - add each word to hash table and update frequency if it already exists
 * Loop through each word in hash table
 *      - add the word to the bucket at index frequency
 *      - if bucket[frequency] is not empty
 *          - push word to that array
 *          - sort words by alphabetical order
 *      - else: set bucket at index frequency to equal an array with word in it
 * Loop through bucket from index 1 to bucket.length
 *      - if current index is not null, spread all values found at that index to sortedWords
 * Return sortedWords sliced from k
 *
 */

const topKFrequent = (words, k) => {
  let hash = {};
  let bucket = new Array(words.length + 1).fill(null);
  let sortedWords = [];

  for (const word of words) {
    hash[word] ? hash[word]++ : (hash[word] = 1);
  }
  for (const word in hash) {
    const freq = hash[word];
    if (!bucket[freq]) {
      bucket[freq] = [word];
    } else {
      bucket[freq].push(word);
      bucket[freq].sort((a, b) => (a > b ? 1 : -1));
    }
  }
  for (let i = bucket.length; i > 0; i--) {
    if (bucket[i]) {
      sortedWords.push(...bucket[i]);
    }
  }
  return sortedWords.slice(0, k);
};

/**
 * N - number of words in array
 * Time Complexity: worst case: O(NlogN)
 *     since there could be a case where each word appears the same amount of times
 * Space Complexity: O(N)
 */

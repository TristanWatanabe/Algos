/**
 * Constructor:
 *      - scores: hash table with key-val pair of playerId-totalScore
 * AddScore: id, score
 *  If player id is already in the hash table, increment player's score by score
 *  else, add player id to hash table and have score equal to score
 *
 * Top: k
 *  Sort the player scores in descending order and store in array
 *  Return the total of the top k player scores in sorted array
 *
 * Reset: id
 *  If player id exists in hash table, set its score to zero
 */

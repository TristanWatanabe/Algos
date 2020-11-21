/**
 *  Variables:
 *      - scores: hash table to store each student's score with key-val pair of id-scores(array)
 *      - result: variable that holds each players top 5 average
 *  Loop through each pair in items array
 *      - if id already exists in scores hash table, push score to it
 *      - else, hash scores hash at key id to equal an array with the first score as its first element
 *  Loop through each key in scores
 *      - have variable s to hold the value at scores[key]
 *      - if the length of s is greater than 5
 *          - sort s in descending order and have s equal to just the first 5 elements of the sorted s array
 *      - calculate average for student
 *      - push to results [id, average]
 *  Return result
 */

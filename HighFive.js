/**
 *  Variables:
 *      - scores: hash table to store each student's score with key-val pair of id-scores(array)
 *      - result: variable that holds each players top 5 average
 *  Loop through each pair in items array
 *      - if id already exists in scores hash table, push score to it
 *      - else, hash scores hash at key id to equal an array with the first score as its first element
 *  Loop through each key in scores
 *      - have variable studentScores to hold the value at scores[key]
 *      - if the length of studentScores is greater than 5
 *          - sort studentScores in descending order and have s equal to just the first 5 elements of the sorted studentScores array
 *      - calculate average for student
 *      - push to results [id, average]
 *  Return result
 */

const highFive = (items) => {
  let scores = {};
  let result = [];
  for (const item of items) {
    const id = item[0],
      score = item[1];
    scores[id] ? scores[id].push(score) : (scores[id] = [score]);
  }
  for (const id in scores) {
    let studentScores = scores[id];
    if (studentScores.length > 5)
      studentScores = studentScores.sort((a, b) => b - a).slice(0, 5);
    const average = Math.floor(
      studentScores.reduce((sum, num) => sum + num, 0) / 5
    );
    result.push([id, average]);
  }
  return result;
};

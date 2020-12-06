/**
 * Edge Case: if rooms is empty return rooms
 * Use a queue to keep track of all gates and empty rooms we have seen
 * Populate queue with the coordinates of the gates(zeroes)
 * Traverse through the queue
    - for each location in queue, check its top, bottom, left and right
        - if the coordinates are out of bounds or they are not empty rooms, skip
        - else
            -update the value of top/bottom/left/right to be first of queue + 1
            -push top/left/bottom/right coordinates to queue
*/

const wallsAndGates = (rooms) => {
  if (!rooms.length) return rooms;
  let inf = 2147483647;
  let numRows = rooms.length;
  let numCols = rooms[0].length;
  let q = [];
  //[i, j+1], [i, j-1], [i+1, j], [i-1, j]
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  //add gates to queue
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (rooms[i][j] === 0) q.push([i, j]);
    }
  }
  //traverse through each cell that's either a gate or an empty room
  while (q.length) {
    let curr = q.shift();
    let row = curr[0];
    let col = curr[1];
    for (const direction of directions) {
      let r = row + direction[0];
      let c = col + direction[1];
      if (r < 0 || c < 0 || r >= numRows || c >= numCols || rooms[r][c] !== inf)
        continue;
      rooms[r][c] = rooms[row][col] + 1;
      q.push([r, c]);
    }
  }
};

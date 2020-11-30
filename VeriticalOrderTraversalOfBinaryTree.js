/*
Order: top to bottom, left to right
variables: 
    -Hash table - 'x-y' - []
    -minX, maxX, minY
    -queue of nodes to visit
Iterate over each node
    -have size variable to keep track of how many nodes in current level
    -loop through from 0 to size
        -remove first node from queue
        -add node val and x and y coordinates to hash table
            - if hash key already exists, add then sort that array
        -push left and right nodes for current node, with x-1/x+1 and y-1
Iterate over hash table from minX to maxX and minY and build output array
Return output array
    
*/

const verticalTraversal = (root) => {
  let hash = {};
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity;
  let queue = [[root, 0, 0]];
  let result = [];
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const element = queue.shift();
      const node = element[0],
        x = element[1],
        y = element[2];
      const key = `${x}-${y}`;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;

      if (hash[key]) {
        hash[key].push(node.val);
        hash[key].sort((a, b) => a - b);
      } else {
        hash[key] = [node.val];
      }

      if (node.left) queue.push([node.left, x - 1, y - 1]);
      if (node.right) queue.push([node.right, x + 1, y - 1]);
    }
  }
  for (let x = minX; x <= maxX; x++) {
    let temp = [];
    for (let y = 0; y >= minY; y--) {
      const key = `${x}-${y}`;
      if (hash[key]) {
        temp.push(...hash[key]);
      }
    }
    result.push(temp);
  }
  return result;
};

/**
 * N - number of nodes in binary tree
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

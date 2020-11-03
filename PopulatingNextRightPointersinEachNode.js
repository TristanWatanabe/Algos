/**
 * Variables
 *       queue - array that holds the next node to be processed
 *            - each index holds an array with format [node, level in tree]
 *  Loop while queue is not empty
 *      - variable size to keep track of queue size BEFORE adding each nodes children
 *          - this allows us to navigate the tree by level
 *      - For Loop from 0 to size
 *      - if queue is not empty and the first node in queue is in the same level as current node
 *          - connect current node's next pointer to the first node in queue
 *      - Push current node's left and right nodes onto queue
 *          - with level + 1 to indicate that they are in another level of the tree
 *  Return input root
 */

const connect = root => {
  //empty tree
  if (!root) return root;
  let queue = [[root, 0]];
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      //current node and level
      let node = curr[0],
        level = curr[1];
      //connect siblings together
      if (queue.length && level === queue[0][1]) {
        node.next = queue[0][0];
      }
      //push left and right nodes to queue
      if (node.left) queue.push([node.left, level + 1]);
      if (node.right) queue.push([node.right, level + 1]);
    }
  }
  return root;
};

/**
 * N - number of nodes in tree
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

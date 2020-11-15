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

const connect = (root) => {
  if (!root) return root;
  let q = [[root, 0]];
  while (q.length) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let curr = q.shift();
      let node = curr[0],
        level = curr[1];
      let next = q.length && level === q[0][1] ? q[0][1] : null;
      node.next = next;
      if (node.left) q.push([node.left, level + 1]);
      if (node.right) q.push([node.right, level + 1]);
    }
  }
  return root;
};

/**
 * N - number of nodes in tree
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

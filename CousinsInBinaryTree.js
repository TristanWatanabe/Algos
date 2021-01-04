/*
    Have a stack that stores a stack of [node, parent, level]
    Have found array to store nodes that matched either x or y
    
    Loop while stack has nodes in it
    Have variable size so we can use that to loop over nodes in the same level
        If current node value  equals to x or y
            if not parent,
                -return false since that means a match occured at the root
            else: push to found array [node, parent, level]
        If we've found 2 nodes to match x and y compare them
            if their parents are the same or they are not in the same level in tree
                - return false
            return true
    if node has a left, push [left, parent, level+1]
    if node has a right, push [right, parent, level+1]

*/

const isCousins = (root, x, y) => {
  //[node, parent, level]
  let stack = [[root, null, 0]];
  let found = [];
  while (stack.length) {
    let size = stack.length;
    for (let i = 0; i < size; i++) {
      let node = stack.pop();
      let curr = node[0],
        parent = node[1],
        level = node[2];
      if (curr.val === x || curr.val === y) {
        if (!parent) return false;
        found.push([curr, parent, level]);
      }
      if (found.length === 2) {
        if (found[0][2] !== found[1][2] || found[0][1] === found[1][1])
          return false;
        return true;
      }
      if (curr.left) stack.push([curr.left, curr, level + 1]);
      if (curr.right) stack.push([curr.right, curr, level + 1]);
    }
  }
};

/**
 * N - number of nodes in tree
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

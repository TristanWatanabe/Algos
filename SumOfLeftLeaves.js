/**
 * MAIN: root
 *  Variables:
 *      sum - global variable to keep track of total of all left leaves in tree
 *  Call Traverse on root
 *  Return sum
 * Traverse: root
 *  - If root is null, return
 *  - If root has a left child and left child is a leaf, add value of left child to sum
 *  - Recurse on root's left child
 *  - Recurse on root's right child
 *
 */

const sumOfLeftLeaves = (root) => {
  let sum = 0;
  const traverse = (root) => {
    if (!root) return;
    if (root.left && !root.left.left && !root.left.right) sum += root.left.val;
    traverse(root.left);
    traverse(root.right);
  };
  traverse(root);
  return sum;
};

/**
 * N - number of nodes in tree
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

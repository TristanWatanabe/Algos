/**
 * largest - number of nodes for a valid BST subtree (global variable)
 * MAIN:
 *  if root is null, return 0
 *  else call findLargest on root
 *  return largest
 *
 * findNumNodes: root
 *  - finds the number of nodes in subtree
 *  - use a stack to count nodes
 * findLargest: root
 *  Variables:
 *      count - call findNumNodes to get number of nodes in subtree
 *  if root is null, return
 *  Call isBST to check if current subtree is a valid BST
 *      - if yes, set largest to larger number between largest and count
 *      - else, recursively call findLargest on root.left and root.right
 * isBST: root, min, max
 *  If root is null, return true
 *  If root value is between min and max
 *      - recursively call isBST on left and right children of root to check if the rest of tree is a BST
 *  Else return false
 */

const largestBSTSubtree = (root) => {
  const findLargest = (root) => {
    if (!root) return;
    let count = findNumNodes(root);

    if (isBST(root, -Infinity, Infinity)) {
      largest = Math.max(largest, count);
      return;
    } else {
      findLargest(root.left);
      findLargest(root.right);
    }
  };
  const findNumNodes = (root) => {
    let stack = [root];
    let count = 0;
    while (stack.length) {
      let curr = stack.shift();
      count++;
      if (curr.left) stack.push(curr.left);
      if (curr.right) stack.push(curr.right);
    }
    return count;
  };
  const isBST = (root, min, max) => {
    if (!root) return true;
    if (root.val > min && root.val < max) {
      return (
        isBST(root.left, min, root.val) && isBST(root.right, root.val, max)
      );
    }
    return false;
  };

  if (!root) return 0;
  let largest = 0;
  findLargest(root);
  return largest;
};

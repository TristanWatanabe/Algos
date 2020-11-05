/**
 * Main: node
 *   Variables:
 *      min - initial value for minimum is -Infinity
 *      max - initial value for maximum is Infinity
 *   Having a range allows us to compare if current node false within the CURRENT min and max of the TREE.
 *   As the recursion continues, min and max are continously updated so when a nodes falls out of range we know
 *   it's NOT a valid BST.
 *   Return answer by calling helper function
 * Helper function: node, MIN, MAX
 *      Base case: if node is null, return true
 *      Recursive case: if node falls between MIN and MAX
 *          recurse with curr.left with range MIN and curr.val AND
 *          recurse with curr.right with range curr.val and MAX
 *      Else return false
 *
 */

/**
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const isValidBST = (root) => {
  return isValid(root, -Infinity, Infinity);
};

const isValid = (curr, min, max) => {
  if (!curr) return true;
  if (curr.val > min && curr.val < max) {
    return (
      isValid(curr.left, min, curr.val) && isValid(curr.right, curr.val, max)
    );
  } else {
    return false;
  }
};

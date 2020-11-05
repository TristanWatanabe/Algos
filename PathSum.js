/**
 * DFS
 * If node equals to null, return false
 * Keep track of a currsum for each node and add the node value to curr sum
 * if node.left and node.right are both null, return sum === currSum
 * recurse on node.left and node.right
 * return if recursed node.left or node.right finds a path equal to sum
 */

const hasPathSum = (root, sum, currSum = 0) => {
  if (!root) return false;
  currSum += root.val;
  //if node is a leaf
  if (!root.left && !root.right) return currSum === sum;
  return (
    hasPathSum(root.left, sum, currSum) || hasPathSum(root.right, sum, currSum)
  );
};

/**
 * N - number of nodes in tree
 * Time Complexity: O(N) every node is visited once
 * Space Complexity: best case: balanced tree which means height of tree is only logN => O(logN)
 *                   worst case: unbalanced tree which means height of tree is N => O(N)
 */

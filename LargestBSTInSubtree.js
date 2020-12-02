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

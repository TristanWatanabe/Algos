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

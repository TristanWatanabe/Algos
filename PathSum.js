/**
 * DFS
 * If node equals to null, return false
 * Keep track of a currsum for each node and add the node value to curr sum
 * if node.left and node.right are both null, return sum === currSum
 * recurse on node.left and node.right
 * return if recursed node.left or node.right finds a path equal to sum
 */

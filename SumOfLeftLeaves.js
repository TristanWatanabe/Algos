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

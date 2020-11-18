/**
 * DeleteNode: root, key
 *  If root value is less than key
 *      - find key on the right subtree
 *          - modify root.right to equal deleteNode on root.right, key
 *  If root value is greater than key
 *      - find key on the left subtree
 *          - modify root.left to equal deleteNode on root.left, key
 *  If equal
 *      3 possible cases:
 *      1) node is a leaf so just set node to null
 *      2) root is not a leaf but has a right child (find leftmost right child)
 *          - set root value to equal successor(root)
 *          - remove the successor from the tree by setting root.right to equal deleteNode on root.right and root.val
 *      3) root is not a leaf and does not have a right child (find rightmost left child)
 *          - set root value to equal predecessor(root)
 *          - remove the predecessor from the tree by setting root.left to equal deleteNode on root.left and root.val
 *  Return root
 *
 *
 * Sucessor: root
 *  Finds the leftmost right child
 *  Move root one time to the right by setting root to equal root.right
 *  Loop while root.left
 *      - set root to equal root.left
 *  Return root.val
 *
 * Predecessor: root
 *  Finds the rightmost left child
 *  Move root one time to the left by setting root to equal root.left
 *  Loop while root.right
 *      - set root to equal root.right
 *  Return root.val
 */

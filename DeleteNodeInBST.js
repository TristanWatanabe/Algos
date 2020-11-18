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
class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const deleteNode = (root, key) => {
  if (!root) return root;
  //check right subtree
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  }
  //check left subtree
  else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }
  //node is equal to key
  else {
    //if node is a leaf
    if (!root.left && !root.right) {
      root = null;
    }
    //if node is not a leaf and has a right child
    else if (root.right) {
      root.val = successor(root);
      root.right = deleteNode(root.right, root.val);
    }
    //if node is not a leaf and has no right child
    else {
      root.val = predecessor(root);
      root.left = deleteNode(root.left, root.val);
    }
  }
  return root;
};
//Finds leftmost right child
const successor = (root) => {
  //move one step to the right then always left
  root = root.right;
  while (root.left) {
    root = root.left;
  }
  return root.val;
};
//Finds rightmost left child
const predecessor = (root) => {
  //move one step to the left then always right
  root = root.left;
  while (root.right) {
    root = root.right;
  }
  return root.val;
};

/**
 * N - number of nodes in BST
 * H - height of the tree
 * Time Complexity: O(logN)
 * Space Complexity: O(H), O(logN) if tree is balanced
 */

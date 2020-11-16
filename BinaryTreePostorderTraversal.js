/**
 * Order: Left, Right, Root
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const postorderTraversal = (root) => {
  if (!root) return [];
  let order = [];
  traverse(root, order);
  return order;
};

const traverse = (node, order) => {
  if (!node) return;
  traverse(node.left, order);
  traverse(node.right, order);
  order.push(node.val);
};

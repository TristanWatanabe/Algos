/**
 *
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const preorderTraversal = (root) => {
  if (!root) return [];
  let order = [];
  traverse(root, order);
  return order;
};

const traverse = (node, order) => {
  if (!node) return;
  order.push(node.val);
  traverse(node.left, order);
  traverse(node.right, order);
};

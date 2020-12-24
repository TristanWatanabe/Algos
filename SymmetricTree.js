const isSymmetric = (root) => {
  if (!root) return true;
  return compare(root.left, root.right);
};

const compare = (node1, node2) => {
  if (!node1 && !node2) return true;
  if (!node1 || !node2 || node1.val !== node2.val) return false;
  return compare(node1.left, node2.right) && compare(node1.right, node2.left);
};

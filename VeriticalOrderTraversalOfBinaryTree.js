const verticalTraversal = (root) => {
  let hash = {};
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity;
  let queue = [[root, 0, 0]];
  let result = [];
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const element = queue.shift();
      const node = element[0],
        x = element[1],
        y = element[2];
      const key = `${x}-${y}`;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;

      if (hash[key]) {
        hash[key].push(node.val);
        hash[key].sort((a, b) => a - b);
      } else {
        hash[key] = [node.val];
      }

      if (node.left) queue.push([node.left, x - 1, y - 1]);
      if (node.right) queue.push([node.right, x + 1, y - 1]);
    }
  }
  for (let x = minX; x <= maxX; x++) {
    let temp = [];
    for (let y = 0; y >= minY; y--) {
      const key = `${x}-${y}`;
      if (hash[key]) {
        temp.push(...hash[key]);
      }
    }
    result.push(temp);
  }
  return result;
};

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

const root = new TreeNode(3);
root.insert([3, 9, 20, null, null, 15, 7]);

var levelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let res = [];
  while (q.length) {
    let length = q.length,
      count = 0;
    let currentLevel = [];
    while (count < length) {
      let node = q.shift();
      currentLevel.push(node.value);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
      count++;
    }
    res.push(currentLevel);
  }
  return res;
};

console.log(levelOrder(root));

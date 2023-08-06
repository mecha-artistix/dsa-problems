// ------- Code to generate our binary tree -------
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

const tree = new TreeNode(1);
tree.insert([1, 2, 3, null, 5, null, 4]);
// ------- Code to generate our binary tree -------
var bfsSoluton = function (root) {
  if (!root) return [];
  let q = [root],
    res = [];
  while (q[0]) {
    let length = q.length,
      count = 0;
    let curNode;
    while (count < length) {
      curNode = q.shift();
      if (curNode.right) q.push(curNode.right);
      if (curNode.left) q.push(curNode.left);
      count++;
    }
    res.push(curNode.value);
  }
  return res;
};

console.log(bfsSoluton(tree));

function dfsSearch(node, curLevel, result) {
  if (!node) return;
  if (curLevel >= result.length) result.push(node.value);
  if (node.right) dfsSearch(node.right, curLevel + 1, result);
  if (node.left) dfsSearch(node.left, curLevel + 1, result);
}
var dfsSolution = function (root) {
  const result = [];
  dfsSearch(root, 0, result);
  return result;
};
console.log(dfsSolution(tree));

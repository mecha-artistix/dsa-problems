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

var maxDepth = function (node, currentDepth) {
  debugger;
  if (!node) {
    return currentDepth;
  }

  currentDepth++;

  return Math.max(
    maxDepth(node.right, currentDepth),
    maxDepth(node.left, currentDepth)
  );
};

console.log(maxDepth(root, 0));

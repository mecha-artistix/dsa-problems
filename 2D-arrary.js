let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
// SECTION: deapth first search
const traversalDFS = function (matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  const values = [];
  dfs(matrix, 0, 0, seen, values);
  return values;
};
const dfs = function (matrix, row, col, seen, values) {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    seen[row][col]
  )
    return;

  seen[row][col] = true;
  values.push(matrix[row][col]);

  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
  }
};
console.log("dfs - ", traversalDFS(matrix));

// SECTION: breadth first search
const traversalBFS = function (matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  const values = [];
  const queue = [[0, 0]];

  while (queue.length) {
    const currentPosition = queue.shift();
    const row = currentPosition[0];
    const col = currentPosition[1];
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      seen[row][col]
    )
      continue;
    seen[row][col] = true;
    values.push(matrix[row][col]);
    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      queue.push([row + currentDir[0], col + currentDir[1]]);
    }
  }
  return values;
};
console.log("bfs - ", traversalBFS(matrix));

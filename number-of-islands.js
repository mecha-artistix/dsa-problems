let matrix = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

var numIslands = function (grid) {
  debugger;
  if (grid.length === 0) return 0;
  let islandCount = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] == 1) {
        islandCount++;
        grid[row][col] = 0;
        const q = [];
        q.push([row, col]);
        while (q.length) {
          const curPos = q.shift();
          const curRow = curPos[0];
          const curCol = curPos[1];
          for (let i = 0; i < directions.length; i++) {
            const curDir = directions[i];
            const nexRow = curRow + curDir[0];
            const nexCol = curCol + curDir[1];
            if (
              nexRow < 0 ||
              nexRow >= grid.length ||
              nexCol < 0 ||
              nexCol >= grid[0].length
            )
              continue;
            if (grid[nexRow][nexCol] == 1) {
              q.push([nexRow, nexCol]);
              grid[nexRow][nexCol] = 0;
            }
          }
        }
      }
    }
  }
  return islandCount;
};
console.log(numIslands(matrix));

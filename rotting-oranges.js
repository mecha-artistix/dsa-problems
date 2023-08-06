let grid = [[1], [2]];

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

var orangesRotting = function (grid) {
  debugger;
  let minutes = 0;
  let freshOranges = 0,
    queue = [],
    rottenOranges = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] == 1) freshOranges++;
      if (grid[row][col] == 2) {
        queue.push([row, col]);
        rottenOranges++;
      }
    }
  }
  if (!rottenOranges && !freshOranges) return 0;
  while (queue.length && freshOranges && rottenOranges) {
    let level = queue.length;
    let minTrack = 0;
    while (minTrack < level) {
      let curEl = queue.shift();
      let curRow = curEl[0];
      let curCol = curEl[1];
      for (let i = 0; i < directions.length; i++) {
        let nexDir = directions[i];
        let nexRow = curRow + nexDir[0];
        let nexCol = curCol + nexDir[1];
        if (
          nexRow < 0 ||
          nexRow >= grid.length ||
          nexCol < 0 ||
          nexCol >= grid[0].length
        ) {
          continue;
        } else if (grid[nexRow][nexCol] == 1) {
          grid[nexRow][nexCol] = 2;
          freshOranges--;
          queue.push([nexRow, nexCol]);
        }
      }
      minTrack++;
    }
    minutes++;
  }
  return freshOranges ? -1 : minutes;
};

console.log(orangesRotting(grid));

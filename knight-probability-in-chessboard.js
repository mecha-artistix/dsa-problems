const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];
var knightProbability = function (n, k, row, column) {
  if (row < 0 || row >= n || column < 0 || column >= n) return 0;
  if (k == 0) return 1;
  let res = 0;
  for (let i = 0; i < DIRECTIONS.length; i++) {
    const dir = DIRECTIONS[i];
    res += knightProbability(n, k - 1, row + dir[0], column + dir[1]) / 8;
  }
  return res;
};
// let n = 5,
//   k = 2,
//   row = 2,
//   column = 2;
// console.log(knightProbability(n, k, row, column));

var knightProbabilityDP = function (N, k, r, c) {
  // to hold 2d grid for every single step value k
  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(N).fill(0).map(() => new Array(N).fill(undefined)));
  return recurse(N, k, r, c, dp);
};
function recurse(N, k, r, c, dp) {
  if (r < 0 || r >= n || c < 0 || c >= n) return 0;
  if (k == 0) return 1;
  if (dp[k][r][c] !== undefined) return dp[k][r][c];
  let res = 0;
  for (let i = 0; i < DIRECTIONS.length; i++) {
    const dir = DIRECTIONS[i];
    res += recurse(N, k - 1, r + dir[0], c + dir[1], dp) / 8;
  }
  dp[k][r][c] = res;
  return dp[k][r][c];
}
let n = 3,
  k = 2,
  row = 0,
  column = 0;
console.log(knightProbabilityDP(n, k, row, column));

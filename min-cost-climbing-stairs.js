// Recusrisive solution Top-Down Dynamic Programming

function minCost(i, cost) {
  if (i < 0) return 0;
  if (i == 0 || i == 1) return cost[i];
  return cost[i] + Math.min(minCost(i - 1, cost), minCost(i - 2, cost));
}
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  return Math.min(minCost(n - 1, cost), minCost(n - 2, cost));
};

let cost = [20, 15, 30, 5];
console.log(minCostClimbingStairs(cost));

function minCostClimbMemo(cost) {
  const n = cost.length;
  const dp = [];
  return Math.min(minCostMemo(n - 1, cost, dp), minCostMemo(n - 2, cost, dp));
}

function minCostMemo(i, cost, dp) {
  if (i < 0) return 0;
  if (i == 0 || i == 1) return cost[i];
  if (dp[i] !== undefined) return dp[i];
  dp[i] =
    cost[i] +
    Math.min(minCostMemo(i - 1, cost, dp), minCostMemo(i - 2, cost, dp));
  return dp[i];
}
console.log(minCostClimbMemo(cost));

// .    Approach
// return when no subordinate
// compare the time from all subordinate and retain the max value
let n = 8,
  headID = 4,
  managers = [2, 2, 4, 6, -1, 4, 4, 5],
  informTime = [0, 0, 4, 0, 7, 3, 6, 0];
var numOfMinutes = function (n, headID, managers, informTime) {
  // transform/create adj list from managers array
  const adjList = managers.map(() => []);
  for (let e = 0; e < managers.length; e++) {
    //manager.length = to n
    const manager = managers[e];
    if (manager == -1) continue;
    adjList[manager].push(e);
  }
  return dfs(headID, adjList, informTime);
};
const dfs = function (currentId, adjList, informTime) {
  if (adjList[currentId].length === 0) return 0;
  let max = 0;
  const subordinates = adjList[currentId];
  for (let i = 0; i < subordinates.length; i++) {
    max = Math.max(max, dfs(subordinates[i], adjList, informTime));
  }
  return max + informTime[currentId];
};
console.log(numOfMinutes(n, headID, managers, informTime));

const numCourses = 6;
const preReq = [
  [1, 0],
  [2, 1],
  [2, 5],
  [0, 3],
  [4, 3],
  [3, 5],
  [4, 5],
];
var canFinish = function (numCourses, prerequisites) {
  const adjList = new Array(numCourses).fill(0).map(() => []);
  for (let i = 0; i < prerequisites.length; i++) {
    const coursePair = prerequisites[i];
    adjList[coursePair[1]].push(coursePair[0]);
  }

  //- loop over the total size of n using bfs

  for (let v = 0; v < numCourses; v++) {
    const queue = [];
    const seen = {};
    for (let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
    }
    while (queue.length) {
      const current = queue.shift();
      seen[current] = true;
      if (current == v) return false;
      const adj = adjList[current];
      for (let i = 0; i < adj.length; i++) {
        const next = adj[i];
        if (!seen[next]) queue.push(next);
      }
    }
  }
  return true;
};
console.log(canFinish(numCourses, preReq));

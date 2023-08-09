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
  const adjList = prerequisites.map(() => []);

  for (let i = 0; i < prerequisites.length; i++) {
    const coursePair = prerequisites[i];
    let adjListIdx = coursePair[1];
    adjList[adjListIdx].push(coursePair[0]);
  }
  return adjList;
};
console.log(canFinish(numCourses, preReq));
const adj = new Array(6).fill(9).map(() => [9]);
console.log(adj);

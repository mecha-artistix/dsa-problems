// Representation of GRAPHS
//  Adjacency List ->  Array where index values point to the vertix
// .    and is populated with an array of values connected to that vertix

const adjList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 4, 5, 2],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];
// breath first search traversal

const traversalBFS = function (graph) {
  const queue = [0],
    values = [],
    seen = {};
  while (queue.length) {
    const vertex = queue.shift();
    values.push(vertex);
    seen[vertex] = true;
    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (!seen[connection]) queue.push(connection);
    }
  }
  return values;
};

console.log(traversalBFS(adjList));

// depth first search traversal

const traversalDFS = function (vertex, graph, values = [], seen = {}) {
  values.push(vertex);
  seen[vertex] = true;
  const connections = graph[vertex];

  for (let i = 0; i < connections.length; i++) {
    const connection = connections[i];
    if (!seen[connection]) traversalDFS(connection, graph, values, seen);
  }

  return values;
};

console.log(traversalDFS(0, adjList));

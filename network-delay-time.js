// Priority Queue implementation
class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

var networkDelayTime = function (times, n, k) {
  const distances = new Array(n).fill(Infinity);
  const adjList = distances.map(() => []);
  distances[k - 1] = 0;
  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
  heap.push(k - 1);
  for (let i = 0; i < times.length; i++) {
    const source = times[i][0];
    const target = times[i][1];
    const weight = times[i][2];
    adjList[source - 1].push([target - 1, weight]);
  }
  while (!heap.isEmpty()) {
    const currVertex = heap.pop();
    const adjacent = adjList[currVertex];
    for (let i = 0; i < adjacent.length; i++) {
      const neibVert = adjacent[i][0];
      const weight = adjacent[i][1];
      if (distances[currVertex] + weight < distances[neibVert]) {
        distances[neibVert] = distances[currVertex] + weight;
        heap.push(neibVert);
      }
    }
  }
  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};
let times = [
  [2, 1, 1],
  [2, 3, 1],
  [3, 4, 1],
];
let n = 4,
  k = 2;
console.log(networkDelayTime(times, n, k));

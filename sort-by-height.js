// quick sort implementation

function solution(a) {
  let left = 0,
    right = a.length - 1;
  while (a[right] == -1 && right > 0) {
    right--;
  }
  while (a[left] == -1 && left < right) {
    left++;
  }
  if (left < right) {
    quickSort(a, 0, a.length - 1);
  }
  return a;
}
function quickSort(nums, left, right) {
  if (left < right) {
    let partitionIdx = getPartition(nums, left, right);

    quickSort(nums, left, partitionIdx - 1);
    quickSort(nums, partitionIdx + 1, right);
  }
}
function getPartition(nums, left, right) {
  while (nums[right] === -1 && right > 0) {
    right--;
  }
  let pivotEl = nums[right];

  while (nums[left] === -1 && left < right) {
    left++;
  }

  let partitionIdx = left;
  for (let j = left; j < right; j++) {
    if (nums[j] < pivotEl && nums[j] !== -1) {
      swap(nums, partitionIdx, j);
      partitionIdx++;
    }
  }
  swap(nums, partitionIdx, right);
  return partitionIdx;
}
function swap(arr, i, j) {
  if (arr[i] !== -1) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
let a = [-1, 150, 190, 170, -1, -1, 160, 180];
let b = [-1, -1, -1, -1, -1];
let c = [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1];
let d = [-1, 5, -1, 0];
console.log(solution(d));

function filter(a) {
  debugger;
  let people = a.filter((el) => el !== -1);
  people.sort((a, b) => b - a);
  console.log(people);
  for (let i = 0; i < a.length; i++) {
    const el = a[i];
    if (el !== -1) a[i] = people.pop();
  }
  return a;
}
console.log(filter(a));

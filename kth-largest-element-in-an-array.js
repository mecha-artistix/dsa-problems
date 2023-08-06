var swap = function (array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

var getPartitionidx = function (arr, left, right) {
  const pivotEl = arr[right];
  let partIdx = left;
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivotEl) {
      swap(arr, partIdx, j);
      partIdx++;
    }
  }
  swap(arr, partIdx, right);
  return partIdx;
};

var quickSelect = function (arr, left, right, idxToFind) {
  if (left < right) {
    const partitionIndex = getPartitionidx(arr, left, right);
    if (partitionIndex == idxToFind) {
      return arr[partitionIndex];
    } else if (partitionIndex < idxToFind) {
      return quickSelect(arr, partitionIndex + 1, right);
    } else if (partitionIndex > idxToFind) {
      return quickSelect(arr, left, partitionIndex - 1);
    }
  }
};

var quickSort = function (arr, left, right) {
  if (left < right) {
    const partitionIndex = getPartitionidx(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
};
var findKthLargest = function (nums, k) {
  const indexToFind = nums.length - k;
  quickSelect(nums, 0, nums.length - 1, indexToFind);
  return nums[indexToFind];
};

const array = [3, 2, 1, 5, 6, 4];
const kToFind = 3;
console.log(findKthLargest(array, kToFind));

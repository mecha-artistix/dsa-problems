var binarySearch = function (nums, left, right, target) {
  debugger;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let foundValue = nums[mid];
    if (foundValue === target) {
      return mid;
    } else if (foundValue < target) {
      left = mid + 1;
    } else if (foundValue > target) {
      right = mid - 1;
    }
  }
  return -1;
};
var searchRange = function (nums, target) {
  debugger;
  if (nums.length === 0) return [-1, -1];
  const firstPos = binarySearch(nums, 0, nums.length - 1, target);
  if (firstPos == -1) return [-1, -1];
  let startPos = firstPos,
    endPos = firstPos,
    tempL,
    tempR;
  while (startPos !== -1) {
    tempL = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }
  startPos = tempL;
  while (endPos !== -1) {
    tempR = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }
  endPos = tempR;
  return [startPos, endPos];
};
let nums = [5, 7, 7, 8, 8, 10];
let nums2 = [8, 8, 8, 8, 8, 10];
let nums3 = [1];
let nums4 = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 6, 6, 6, 6, 7, 8];
let target = 1;
console.log(searchRange(nums3, target));

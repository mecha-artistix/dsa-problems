var thirdMax = function (nums) {
  let left = 0,
    right = nums.length - 1;
  let uniqueNums = {};
  while (left <= right) {
    let num = nums[left];
    if (uniqueNums[num]) {
      left++;
    } else {
      uniqueNums[num] = left;
      left++;
    }
  }
  let arr = Object.keys(uniqueNums);
  arr.sort((a, b) => a - b);
  if (arr.length < 3) return +arr[arr.length - 1];
  return +arr[arr.length - 3];
};

let nums = [3, 2, 1]; // 1
let nums2 = [2, 1]; // 2
let nums3 = [2, 2, 3, 1, 5]; // 1
console.log(thirdMax(nums3));

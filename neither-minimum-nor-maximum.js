var findNonMinOrMax = function (nums) {
  if (nums.length <= 2) return -1;
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

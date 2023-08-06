/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    if (nums[p] in numsMap) {
      return [p, numsMap[nums[p]]];
    } else {
      numsMap[target - nums[p]] = p;
    }
  }
  return null;
};

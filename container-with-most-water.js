/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    let calcArea = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(calcArea, maxArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

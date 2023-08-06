/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  function validSubPalindrome(s, left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  s = s.replace(/[^a-z0-9]+/gi, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right])
      return (
        validSubPalindrome(s, left + 1, right) ||
        validSubPalindrome(s, left, right - 1)
      );
    left++;
    right--;
  }
  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (n) {
  debugger;
  // s = s.replace(/[^a-z0-9]+/gi, "").toLowerCase();
  const s = Array.from(String(n), Number);

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};
console.log(isPalindrome(-121));

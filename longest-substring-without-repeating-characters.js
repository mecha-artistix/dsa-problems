/**
 * @param {string} s
 * @return {number}


*/

// Brute force solution

const lengthOfSubStr = function (s) {
  debugger;
  if (s.length <= 1) return s.length;

  let longest = 0;
  for (let p = 0; p < s.length; p++) {
    let str = [];
    let strLength = 0;
    for (let q = p; q < s.length; q++) {
      let curr = s[q];
      if (!str.includes(curr)) {
        strLength++;
        str.push(curr);
        longest = Math.max(longest, strLength);
      } else {
        break;
      }
    }
    console.log("str ", str, longest);
  }
  return longest;
};
let s = "abckcabbk";
console.log(lengthOfSubStr(s));

// Optimized Solution
const longSubStr = function (s) {
  if (s.length <= 1) return s.length;
  const seenChar = {};
  let left = 0;
  let longest = 0;
  for (let right = 0; right < s.length; right++) {
    let curr = s[right];
    let prevSeenChar = seenChar[curr];
    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    seenChar[curr] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

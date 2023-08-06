/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function (S, T) {
  let p = S.length - 1;
  let q = T.length - 1;
  while (p >= 0 || q >= 0) {
    if (S[p] === "#" || T[q] === "#") {
      if (S[p] === "#") {
        let hashCount = 2;
        while (hashCount > 0) {
          p--;
          hashCount--;
          if (S[p] === "#") {
            hashCount += 2;
          }
        }
      }
      if (T[q] === "#") {
        let hashCount = 2;
        while (hashCount > 0) {
          q--;
          hashCount--;
          if (T[q] === "#") {
            hashCount += 2;
          }
        }
      }
    } else {
      if (S[p] !== T[q]) {
        return false;
      } else {
        p--;
        q--;
      }
    }
  }
  return true;
};

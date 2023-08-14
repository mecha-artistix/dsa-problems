function solution(s1, s2) {
  let hashS1 = {};
  let hashS2 = {};
  let count = 0;
  for (let p = 0; p < s1.length; p++) {
    if (!(s1[p] in hashS1)) {
      hashS1[s1[p]] = 1;
    } else {
      hashS1[s1[p]] = hashS1[s1[p]] + 1;
    }
  }
  for (let q = 0; q < s2.length; q++) {
    if (hashS1[s2[q]]) {
      if (hashS2[s2[q]]) {
        hashS2[s2[q]] = hashS2[s2[q]] + 1;
      } else if (!([s2[q]] in hashS2)) {
        hashS2[s2[q]] = 1;
      }
    }
  }
  for (let key in hashS2) {
    count = count + Math.min(hashS1[key], hashS2[key]);
  }
  return count;
}

let s1 = "aabcc",
  s2 = "adcaa";
console.log("count", solution(s1, s2));

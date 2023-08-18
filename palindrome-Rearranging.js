function solution(inputString) {
  let arr = inputString.split("");
  let telly = {};
  arr.forEach((el) => {
    if (telly[el]) telly[el]++;
    else telly[el] = 1;
  });
  let oddCount = 0;
  for (prop in telly) {
    if (telly[prop] % 2 !== 0) oddCount++;
    if (oddCount > 1) break;
  }
  return oddCount <= 1;
}

let st = "abb"; // abba
console.log(solution(st));

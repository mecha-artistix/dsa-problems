function solution(inputArray) {
  let ansArr = [];
  ansArr.push(inputArray.shift());
  let p = ansArr.length - 1;
  //  console.log(ansArr,inputArray);
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === ansArr[ansArr.length - 1].length) {
      ansArr.push(inputArray[i]);
    }

    if (inputArray[i].length > ansArr[ansArr.length - 1].length) {
      ansArr = [];
      ansArr.push(inputArray[i]);
    }
  }
  return ansArr;
}
let inputArray = ["aba", "aa", "ad", "vcd", "aba"];
console.log(solution(inputArray));

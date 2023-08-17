function solution(inputArray) {
  let moves = 0;
  for (let i = 0; i < inputArray.length; i++) {
    let cur = inputArray[i];
    let pre = inputArray[i - 1];
    if (cur <= pre) {
      moves = moves + (pre - cur) + 1;
      inputArray[i] = cur + (pre - cur) + 1;
      console.log(i, cur, moves);
    }
  }
  console.log(inputArray);
  return moves;
}
let inputArray = [1, 1, 1];
console.log(solution(inputArray));

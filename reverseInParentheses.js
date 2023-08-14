function solution(inputString) {
  let left = 0,
    right = inputString - 1;
  for (let i = 0; i < inputString.length; i++) {
    const element = inputString[i];
  }
}
function recurse(str, left) {
  let right = left;
  for (let j = 0; j < str.length; j++) {
    const element = str[j];
  }
}
let st = "foo(bar(baz))blim";
// - > "foobazrabblim"  Because "foo(bar(baz))blim"
// becomes "foo(barzab)blim" and then "foobazrabblim"

console.log(solution(st));

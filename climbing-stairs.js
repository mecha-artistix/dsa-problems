var climbStairs = function (n) {
  debugger;

  let one = 1,
    two = 1;
  for (let i = 0; i < n - 1; i++) {
    let temp = one;
    one = one + two;
    two = temp;
  }
  return one;
};

let n = 5;
console.log(climbStairs(n));

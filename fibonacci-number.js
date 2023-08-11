var fib = function (n) {
  let one = 0,
    two = 1;
  for (let i = 0; i < n - 1; i++) {
    let temp = two;
    two = two + one;
    one = temp;
  }
  return n < 1 ? 0 : two;
};
let n = 5;
console.log(fib(n));

// write a fictorial funcctions

function factorial(x) {
  if (x <= 0) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(4));

// tail recursion
function fac(x, tail = 1) {
  if (x <= 1) return tail;
  return fac(x - 1, tail * x);
}
console.log(fac(5));

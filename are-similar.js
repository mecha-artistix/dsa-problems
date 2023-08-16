function solution(a, b) {
  let are = true,
    swap = false;
  let av = null,
    bv = null;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (av == null || bv == null) {
        av = a[i];
        bv = b[i];
      } else {
        if (swap || av !== b[i] || bv !== a[i]) {
          are = false;
        }
        swap = true;
      }
    }
  }
  return are;
}
let a = [1, 2, 1, 2],
  b = [2, 2, 1, 1];

console.log(solution(a, b));

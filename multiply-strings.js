var multiply = function (num1, num2) {
  let prod = Array(num1.length + num2.length).fill(0);

  for (let p = num1.length - 1; p >= 0; p--) {
    const dig1 = Number(num1[p]);

    for (let q = num2.length - 1; q >= 0; q--) {
      const dig2 = Number(num2[q]);
      const remain = prod[p + q + 1];
      const mult = dig1 * dig2 + remain;
      const unitDig = mult % 10;
      const carry = Math.floor(mult / 10);

      prod[p + q + 1] = unitDig;
      prod[p + q] += carry;
    }
  }
  let i = 0;
  while (prod[i - 1] === 0 || prod[i - 1] == undefined) {
    prod.shift();
    i++;
  }
  return prod.length > 0 ? prod.join("") : "0";
};
let num1 = "123",
  num2 = "456";

console.log(multiply(num1, num2));
// console.log(["l", "p"].concat(Array(4).fill(0)));

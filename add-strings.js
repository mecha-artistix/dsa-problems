var addStrings = function (num1, num2) {
  debugger;
  let p1 = num1.length - 1,
    p2 = num2.length - 1,
    ansArr = [],
    carry = 0;

  while (p1 >= 0 || p2 >= 0) {
    let adr = carry + Number(num1[p1] || 0) + Number(num2[p2] || 0);
    ansArr.unshift(adr % 10);
    carry = adr > 9 ? 1 : 0;
    p1--;
    p2--;
  }
  if (carry === 1) ansArr.unshift(1);
  return ansArr.join("");
};
console.log(addStrings("456", "77"));

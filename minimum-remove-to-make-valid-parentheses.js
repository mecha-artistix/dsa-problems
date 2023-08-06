var minRemoveToMakeValid = function (s) {
  debugger;
  let arr = s.split("");
  const charStack = [];
  for (let i = 0; i < arr.length; i++) {
    // if left ( -> push i of ) in to stack
    if (arr[i] === "(") {
      charStack.push(i);
      // if right ) -> pop i of left ) from stack
    } else if (arr[i] === ")" && charStack.length) {
      charStack.pop();
    } else if (arr[i] === ")") {
      arr[i] = "";
    }
  }

  // if stack has length -> check i values and pop those i from string
  while (charStack.length > 0) {
    let curIndx = charStack.pop();
    arr[curIndx] = "";
  }
  s = arr.join("");
  return s;
};
s = "l((c)o)d))(";

console.log(minRemoveToMakeValid(s));

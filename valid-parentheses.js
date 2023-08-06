var isValid = function (s) {
  if (s.length == 0) return true;
  const paraMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let paraStack = [];
  for (let i = 0; i < s.length; i++) {
    if (paraMap[s[i]]) {
      paraStack.push(s[i]);
    } else {
      const leftParan = paraStack.pop();
      if (s[i] !== paraMap[leftParan]) return false;
    }
  }
  return paraStack.length === 0 ? true : false;
};
console.log(isValid("[{()"));

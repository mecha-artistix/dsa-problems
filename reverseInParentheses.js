function reverseStr(string) {
  let ansArr = [];
  let i = 0;
  while (i < string.length) {
    const el = string[i];
    if (el !== "(") {
      ansArr.push(el);
      i++;
    } else if (el == "(") {
      const [nestedPart, newIdx] = revRec(string, i + 1);
      ansArr.push(...nestedPart);
      i = newIdx + 1;
    }
  }

  return ansArr.join("");
}
function revRec(string, i) {
  let partArr = [];
  while (i < string.length) {
    let char = string[i];
    if (char == "(") {
      let [nestedPart, newIdx] = revRec(string, i + 1);
      partArr.push(...nestedPart);
      i = newIdx;
    } else if (char == ")") {
      partArr.reverse();
      break;
    } else {
      partArr.push(char);
    }
    i++;
  }
  return [partArr, i];
}

let st = "foo(bar(baz))(blim)";
console.log(reverseStr(st));
// - > "foobazrabblim"  Because "foo(bar(baz))blim"
// becomes "foo(barzab)blim" and then "foobazrabblim"

// Solution using inbuild methods
function solution(inputString) {
  let str = inputString;
  const re = /\([A-Za-z]*\)/g;
  console.log(re.test(str));
  while (re.test(str)) {
    str = str.replace(re, (substr) =>
      substr
        .slice(1, substr.length - 1)
        .split("")
        .reverse()
        .join("")
    );
  }

  return str;
}
// console.log(solution(st));

function solutionB(forest, bird) {
  let p = 0;
  let stickLen = 0;
  let arr = [];

  let right = bird + 1;
  let left = bird - 1;
  while (right < forest.length && stickLen <= 100) {
    if (forest[right] > 0) {
      arr.push(right);
      stickLen += forest[right];
      break;
    }
    right++;
  }
  while (left < 0 && stickLen <= 100) {
    if (forest[left] > 0) {
      arr.push(left);
      stickLen += forest[left];
      break;
    }
    left--;
  }

  return arr;
}

let forest = [54, 14, 3, 0, 23, 15],
  brd = 3;
console.log(solutionB(forest, brd));

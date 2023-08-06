var twoSum = function (numbers, target) {
  const numbersMap = {};
  for (let p = 0; p < numbers.length; p++) {
    let index = p + 1;
    if (numbers[p] in numbersMap) {
      return [numbersMap[numbers[p]], index];
    } else {
      numbersMap[target - numbers[p]] = index;
    }
  }
  return null;
};
let numbers = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(numbers, target));

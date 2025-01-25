function calculate(num1, num2, calculatingFunction) {
  return calculatingFunction(num1, num2);
}

const multiplyTwoNumbers = function (num1, num2) {
  return num1 * num2;
};

const addTwoNumbers = function (num1, num2) {
  return num1 + num2;
};

const subtractTwoNumbers = function (num1, num2) {
  return num1 - num2;
};

const divideTwoNumbers = function (num1, num2) {
  return num1 / num2;
};

const operations = {
  multiply: multiplyTwoNumbers,
  add: addTwoNumbers,
  subtract: subtractTwoNumbers,
  divide: divideTwoNumbers,
};

const selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation]));

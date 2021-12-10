const operatorName = {
  "+": "add",
  "-": "subtract",
  "*": "multiply",
  "/": "divide",
  "%": "modulus",
};

function add(num1, num2) {
  return (num1 * 100 + num2 * 100) / 100;
}

function subtract(num1, num2) {
  return (num1 * 100 - num2 * 100) / 100;
}

function multiply(num1, num2) {
  return (num1 * 100 * (num2 * 100)) / (100 * 100);
}

function divide(num1, num2) {
  return (((num1 * 100) / num2) * 100) / (100 * 100);
}

function modulus(num1, num2) {
  return (((num1 * 100) % num2) * 100) / 100;
}

function operate(operator) {
  return operatorName[operator];
}

let num1 = parseFloat(prompt("Enter the first number"));
let operator = prompt("add(+), subtract(-), multiply(*), divide(/) ");
let num2 = parseFloat(prompt("Enter the second number"));

function returnResult() {
  let isFunction = window[operate(operator)];

  if (typeof isFunction === "function") {
    console.log(isFunction(num1, num2));
  }
}

returnResult();

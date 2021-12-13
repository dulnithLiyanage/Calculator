// ** Variables --------------------------------------------------------------------------------------------------------------------

const calculationDisplay = document.querySelector("#calculation-display");
const numberDisplay = document.querySelector("#number-display");
const clearEntry = document.querySelector("#clear-entry");
const clearAll = document.querySelector("#clear-all");
const equalSign = document.querySelector("#equal");
const backspace = document.querySelector("#backspace");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");

numbers.forEach((number) => {
  number.addEventListener("click", function () {
    numberDisplay.textContent += number.textContent;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    while (numberDisplay.textContent != "") {
      let num = parseFloat(numberDisplay.textContent);
      if (operator.textContent != "=") {
        calculationDisplay.textContent += `${num} ${operator.textContent} `;
      } else {
        calculationDisplay.textContent += `${num} `;
      }
      numberDisplay.textContent = "";
    }
  });
});

equalSign.addEventListener("click", function () {
  let answer = 0;
  if (isFloat(answer) === true) {
    answer = eval(calculationDisplay.textContent);
  } else {
    answer = eval(calculationDisplay.textContent);
  }
  calculationDisplay.textContent = "";
  numberDisplay.textContent = answer;
});

clearAll.addEventListener("click", function () {
  calculationDisplay.textContent = "";
  numberDisplay.textContent = "";
});

clearEntry.addEventListener("click", function () {
  numberDisplay.textContent = "";
});

backspace.addEventListener("click", function () {
  let numbers = numberDisplay.textContent.split("");
  numbers.pop(numbers[numbers.length - 1]);
  numberDisplay.textContent = numbers.join("");
});

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

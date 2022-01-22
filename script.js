// ! Calculator Class -----------------------------------------------------------------------------------------------------------

class Calculator {
  constructor(previousTextElement, currentTextElement) {
    this.previousTextElement = previousTextElement;
    this.currentTextElement = currentTextElement;
    this.clearAll();
  }

  clearAll() {
    this.previousTextElement.textContent = "";
    this.currentNumber = "";
    this.operation = undefined;
  }

  clearEntry() {
    this.currentNumber = "";
  }

  backspace() {
    this.currentNumber = this.currentNumber.toString().slice(0, -1);
  }

  choseOperation(operation) {
    if (this.currentNumber === "") return;
    if (this.previousNumber != "") {
      this.calculate();
    }
    this.operation = operation;
    this.previousNumber = this.currentNumber;
    this.currentNumber = "";
  }

  appendNumber(number) {
    if (number === "." && this.currentNumber.includes(".")) return;
    this.currentNumber = this.currentNumber.toString() + number.toString();
  }

  calculate() {
    let computation;
    let previousNumber = parseFloat(this.previousNumber);
    let currentNumber = parseFloat(this.currentNumber);

    if (isNaN(previousNumber) || isNaN(currentNumber)) return;

    switch (this.operation) {
      case "+":
        computation = previousNumber + currentNumber;
        break;
      case "-":
        computation = previousNumber - currentNumber;
        break;
      case "/":
        computation = previousNumber / currentNumber;
        break;
      case "*":
        computation = previousNumber * currentNumber;
        break;
      case "%":
        computation = previousNumber % currentNumber;
        break;
      default:
        return;
    }

    this.currentNumber = computation;
    this.previousTextElement.textContent = "";
    this.operation = undefined;
  }

  updateDisplay() {
    this.currentTextElement.textContent = this.currentNumber;
    if (this.operation != null) {
      this.previousTextElement.textContent = `${this.previousNumber} ${this.operation}`;
    }
  }
}

// ! ----------------------------------------------------------------------------------------------------------------------------
// ** Variables -----------------------------------------------------------------------------------------------------------------

const previousTextElement = document.querySelector("#calculation-display");
const currentTextElement = document.querySelector("#number-display");
const clearEntry = document.querySelector("[data-clear-entry]");
const clearAll = document.querySelector("[data-clear-all]");
const equalSign = document.querySelector("[data-equal-sign]");
const backspace = document.querySelector("[data-backspace]");
const numbers = document.querySelectorAll("[data-numbers]");
const operation = document.querySelectorAll("[data-operation]");

// ** ---------------------------------------------------------------------------------------------------------------------------

const CALCULATOR = new Calculator(previousTextElement, currentTextElement);

// ? Event Listeners ------------------------------------------------------------------------------------------------------------

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    CALCULATOR.appendNumber(button.textContent);
    CALCULATOR.updateDisplay();
  });
});

operation.forEach((operator) => {
  operator.addEventListener("click", () => {
    CALCULATOR.choseOperation(operator.textContent);
    CALCULATOR.updateDisplay();
  });
});

clearAll.addEventListener("click", () => {
  CALCULATOR.clearAll();
  CALCULATOR.updateDisplay();
});

clearEntry.addEventListener("click", () => {
  CALCULATOR.clearEntry();
  CALCULATOR.updateDisplay();
});

backspace.addEventListener("click", () => {
  CALCULATOR.backspace();
  CALCULATOR.updateDisplay();
});

equalSign.addEventListener("click", () => {
  CALCULATOR.calculate();
  CALCULATOR.updateDisplay();
});

// ? ----------------------------------------------------------------------------------------------------------------------------

let display = document.getElementById('display');
let equation = '';

function clearDisplay() {
  equation = '';
  display.value = '';
}

function appendNumber(number) {
  equation += number;
  display.value += number;
}

function appendOperator(operator) {
  equation += operator;
  display.value += operator;
}

function calculate() {
  try {
    let result = eval(equation);
    display.value = result;
    equation = result.toString();
  } catch (error) {
    display.value = 'Error';
  }
}
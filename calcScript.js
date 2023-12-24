let displayValue = '';

function addOnToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function Operator(operator) {
  if (displayValue !== '') {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
  }
}

function calculate() {
  if (displayValue !== '') {
    try {
      displayValue = eval(displayValue).toString();
      document.getElementById('display').value = displayValue;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
}

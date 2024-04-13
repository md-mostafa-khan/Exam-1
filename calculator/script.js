
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const operation = document.getElementById("operation");
const calculateButton = document.getElementById("calculateButton");
const result = document.getElementById("result");

calculateButton.addEventListener("click", function(){
  const num1 = parseFloat(number1.value);
  const num2 = parseFloat(number2.value);
  const selectedOperation = operation.value;

  if (isNaN(num1) || isNaN(num2)) { 
    return (result.textContent = "Error: Please enter valid numbers.");
  }
  let calculatedResult;
  switch (selectedOperation) {
    case 'add':
      calculatedResult = num1 + num2;
      break;
    case 'subtract':
      calculatedResult = num1 - num2;
      break;
    case 'multiply':
      calculatedResult = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        return (result.textContent = "Error: Division by zero.");
      }
      calculatedResult = num1 / num2;
      break;
  }
  result.textContent = calculatedResult;
})
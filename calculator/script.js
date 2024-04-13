
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
    result.style.backgroundColor = "rgba(220, 53, 70, 0.43)";
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
        result.style.backgroundColor = "rgba(220, 53, 70, 0.47)";
        return (result.textContent = "Error: Division by zero.");
      }
      calculatedResult = num1 / num2;
      break;
  }
  if (!isNaN(calculatedResult)) {
    result.textContent = calculatedResult;
    result.style.backgroundColor = "rgba(75, 243, 156, 0.64)";
  } else {
    // If result is invalid, display red signal
    result.textContent = "Error: Invalid calculation.";
    result.style.backgroundColor = "rgba(220, 53, 70, 0.37)";
  }
})
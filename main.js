
function getNumberInput(message) {
    let userInput;
    //Set the flag for check input  value is numeric 
    let isValidNumber = false;
  
    while (!isValidNumber) {
        userInput = prompt(message);
      // Check if the user clicked cancel or provided an empty string
      if (userInput === null || userInput.trim() === "") {
        alert("Invalid input. Please try again.");
        continue;
      }
      
      // Convert String to number
      const numberValue = Number.parseFloat(userInput);
  
      // Check number is valid number or not 
      if (Number.isNaN(numberValue)) {
        alert("Invalid input. Please enter a valid number.");
      } else {
        isValidNumber = true;
      }
    }
    return Number.parseFloat(userInput);
  }
  
  const Number1 = getNumberInput("Please Enter The First Number :");
  const Number2 = getNumberInput("Please Enter The Second Number :");

  function multiply(num1,num2){
    return num1 * num2;
  }
  
  const Result = multiply(Number1,Number2);
  console.log("The product of "+ Number1 +" and " + Number2 + " is :",Result);
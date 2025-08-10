// ===== PART 1: ARROW FUNCTIONS FOR INPUT VALIDATION (3 POINTS) =====

/**
 * TODO: Implement arrow function to check if input is a valid number
 * Requirements:
 * - Use arrow function syntax (=>)
 * - Handle edge cases: empty strings, null, undefined, NaN, Infinity
 * - Return true for valid numbers, false otherwise
 *
 * Test cases to consider:
 * - isValidNumber("5") should return true
 * - isValidNumber("") should return false
 * - isValidNumber("abc") should return false
 * - isValidNumber(null) should return false
 */
const isValidNumber = (input) => {
  // YOUR CODE HERE (1 point)
  return typeof input !== 'boolean' &&  // protect not return True/false
  input !== '' &&     // protect not empty
  input !== null &&   // protect not null
  isFileList(Number(input));  // not Nan or Infinity
};

/**
 * TODO: Implement arrow function to parse valid number or return null
 * Requirements:
 * - Use arrow function syntax (=>)
 * - Return parsed float if valid, null if invalid
 * - Should work with the isValidNumber function above
 *
 * Test cases:
 * - parseValidNumber("5.5") should return 5.5
 * - parseValidNumber("abc") should return null
 */
const parseValidNumber = (input) => {
  // YOUR CODE HERE (1 point)
  return isValidNumber(input) ? parseFloat(input) : null;
  //  check input is number if it is number tranform to float but not nuber return null
};

/**
 * TODO: Implement comprehensive validation with error messages
 * Requirements:
 * - Use arrow function syntax (=>)
 * - Return object with structure: { valid: boolean, message?: string, value?: number }
 * - Provide helpful error messages for different invalid inputs
 *
 * Expected return examples:
 * - { valid: true, value: 5 } for valid input
 * - { valid: false, message: "Please enter a number" } for empty input
 * - { valid: false, message: "Invalid number format" } for non-numeric input
 */
const validateNumberInput = (input) => {
  // YOUR CODE HERE (1 point)
  // Check if the input is empty
  if (input === '' || input === null || input === undefined)
    return {valid: false , message: "Please enter a number"};
  // Check if the input is a valid number
  const parsedValue = parseFloat(input);
  if (isNaN(parsedValue)){
    return {valid: false, message: "invalid number format"};
  }
  return { valid: true, value: parsedValue};
};

// ===== PART 2: FUNCTION EXPRESSIONS FOR ARITHMETIC OPERATIONS (3 POINTS) =====

/**
 * TODO: Implement addition using function expression
 * Requirements:
 * - Use function expression syntax (const name = function() {})
 * - Accept two parameters and return their sum
 */
const add = function (a, b) {
  // YOUR CODE HERE (0.5 points)
  return a + b;
};

/**
 * TODO: Implement subtraction using function expression
 * Requirements:
 * - Use function expression syntax
 * - Accept two parameters and return their difference (a - b)
 */
const subtract = function (a, b) {
  // YOUR CODE HERE (0.5 points)
  return a - b ;
};

/**
 * TODO: Implement multiplication using function expression
 * Requirements:
 * - Use function expression syntax
 * - Accept two parameters and return their product
 */
const multiply = function (a, b) {
  // YOUR CODE HERE (0.5 points)
  return a * b ;
};

/**
 * TODO: Implement division using function expression
 * Requirements:
 * - Use function expression syntax
 * - Accept two parameters and return their quotient (a / b)
 * - Handle division by zero by throwing an error with message "Division by zero is not allowed"
 */
const divide = function (a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed"); 
  }
  return a / b;
};

/**
 * TODO: Implement operation resolver using function expression
 * Requirements:
 * - Use function expression syntax
 * - Accept operation name string ('add', 'subtract', 'multiply', 'divide')
 * - Return the corresponding function from above
 * - Return null or undefined for invalid operation names
 *
 * Example usage:
 * - getOperationFunction('add') should return the add function
 * - getOperationFunction('invalid') should return null/undefined
 */
const getOperationFunction = function (operation) {
  const functions = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  };
  return functions[operation] || null;
};

// ===== PART 3: CALLBACK FUNCTIONS FOR MULTIPLE NUMBER PROCESSING (4 POINTS) =====

/**
 * TODO: Implement function that applies operation callback to array of numbers
 * Requirements:
 * - Accept array of numbers and operation callback function
 * - Apply the operation sequentially to all numbers (reduce pattern)
 * - Handle edge cases: empty array, single number
 * - Throw error for empty array with message "No numbers provided for calculation"
 *
 * Example usage:
 * - performCalculationOnNumbers([1,2,3], add) should return 6 (1+2+3)
 * - performCalculationOnNumbers([10,2,2], divide) should return 2.5 (10/2/2)
 * - performCalculationOnNumbers([5], add) should return 5
 */
  // YOUR CODE HERE (2 points)

const performCalculationOnNumbers = function (numbers, operationCallback) {
  // YOUR CODE HERE (2 points)
  if (numbers.length === 0) {
    throw new Error("No numbers provided for calculation");
  }
  if (numbers.length === 1) {
    return numbers[0];
  }
  // ใช้ reduce สำหรับหลายตัวเลข
  return numbers.reduce((accumulator, currentValue) => {
    return operationCallback(accumulator, currentValue);
  });
};

/**
 * TODO: Implement function that combines operation selection with callback processing
 * Requirements:
 * - Accept array of numbers and operation name string
 * - Use getOperationFunction to get the appropriate operation
 * - Use performCalculationOnNumbers to process the numbers
 * - Handle invalid operation names by throwing error "Invalid operation"
 *
 * Example usage:
 * - calculateWithCallback([1,2,3], 'add') should return 6
 * - calculateWithCallback([10,5], 'divide') should return 2
 */
  // YOUR CODE HERE (1 point)


const calculateWithCallback = function (numbers, operation) {
  // YOUR CODE HERE (1 point)
  const operationFunction = getOperationFunction(operation);
  if (!operationFunction) {
    throw new Error("Invalid operation"); 
  }
  return performCalculationOnNumbers(numbers, operationFunction);
};



// ===== UI FUNCTIONALITY (PROVIDED - DO NOT MODIFY) =====
// The following code handles the user interface
// You do not need to modify this section, but should understand how it works

// Global variables for application state
let selectedMultiOperation = "";
let numbersList = [];
let selectedTwoNumberOperation = "";

// Initialize the application
initializeTwoNumberCalculator();
initializeMultipleNumberCalculator();
console.log("Dual Calculator Application Loaded");
console.log(
  "Features: Arrow Functions, Function Expressions, Callback Functions"
);

// Two Number Calculator Initialization
function initializeTwoNumberCalculator() {
  // Event listeners for operator buttons
  document.querySelectorAll(".operator-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".operator-btn")
        .forEach((b) => b.classList.remove("selected"));
      this.classList.add("selected");
      selectedTwoNumberOperation = this.dataset.op;
    });
  });

  // Form submission handler
  document
    .getElementById("twoNumberForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      handleTwoNumberCalculation();
    });
}

// Handle two number calculation
function handleTwoNumberCalculation() {
  const num1Input = document.getElementById("num1").value;
  const num2Input = document.getElementById("num2").value;
  const resultDiv = document.getElementById("twoNumberResult");

  try {
    // Use your arrow functions for validation
    const validation1 = validateNumberInput(num1Input);
    const validation2 = validateNumberInput(num2Input);

    if (!validation1.valid) {
      throw new Error("First number: " + validation1.message);
    }
    if (!validation2.valid) {
      throw new Error("Second number: " + validation2.message);
    }
    if (!selectedTwoNumberOperation) {
      throw new Error("Please select an operation");
    }

    // Use your function expressions for calculation
    const operationFunc = getOperationFunction(selectedTwoNumberOperation);
    const result = operationFunc(validation1.value, validation2.value);

    displayTwoNumberResult(
      validation1.value,
      validation2.value,
      result,
      selectedTwoNumberOperation
    );
  } catch (error) {
    displayError(resultDiv, error.message);
  }
}

// Display result for two number calculation
function displayTwoNumberResult(num1, num2, result, operation) {
  const resultDiv = document.getElementById("twoNumberResult");
  const operationSymbols = {
    add: "+",
    subtract: "-",
    multiply: "×",
    divide: "÷",
  };

  resultDiv.innerHTML = `
        <div class="result">
            <h3>Calculation Result</h3>
            <p><strong>Expression:</strong> ${num1} ${operationSymbols[operation]} ${num2}</p>
            <div class="result-value">${result}</div>
            <p><em>Calculated using function expressions</em></p>
        </div>
    `;
  resultDiv.style.display = "block";
}

// Multiple Number Calculator Initialization
function initializeMultipleNumberCalculator() {
  // Operation selection
  document
    .getElementById("multiOperator")
    .addEventListener("change", function () {
      selectedMultiOperation = this.value;
    });

  // Add number button
  document
    .getElementById("addNumberBtn")
    .addEventListener("click", function () {
      handleAddNumber();
    });

  // Enter key support for number input
  document
    .getElementById("numberInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        handleAddNumber();
      }
    });

  // Calculate button
  document
    .getElementById("calculateMultiBtn")
    .addEventListener("click", function () {
      handleMultipleNumberCalculation();
    });

  // Clear button
  document
    .getElementById("clearNumbersBtn")
    .addEventListener("click", function () {
      clearAllNumbers();
    });
}

// Handle adding a number to the list
function handleAddNumber() {
  const input = document.getElementById("numberInput").value;
  const validation = validateNumberInput(input); // Uses your arrow function

  if (validation.valid) {
    numbersList.push(validation.value);
    document.getElementById("numberInput").value = "";
    updateNumbersList();
  } else {
    alert("Invalid number: " + validation.message);
  }
}

// Handle multiple number calculation
function handleMultipleNumberCalculation() {
  const resultDiv = document.getElementById("multiNumberResult");

  try {
    if (!selectedMultiOperation) {
      throw new Error("Please select an operation");
    }
    if (numbersList.length === 0) {
      throw new Error("Please add at least one number");
    }

    // Use your callback functions for calculation
    const result = calculateWithCallback(numbersList, selectedMultiOperation);
    displayMultipleNumberResult(
      result,
      selectedMultiOperation,
      numbersList.length
    );
  } catch (error) {
    displayError(resultDiv, error.message);
  }
}

// Display result for multiple number calculation
function displayMultipleNumberResult(result, operation, count) {
  const resultDiv = document.getElementById("multiNumberResult");
  const operationNames = {
    add: "Addition",
    subtract: "Subtraction",
    multiply: "Multiplication",
    divide: "Division",
  };

  resultDiv.innerHTML = `
        <div class="result">
            <h3>${operationNames[operation]} Result</h3>
            <div class="result-value">${result}</div>
            <p><em>Calculated using callback functions on ${count} numbers</em></p>
        </div>
    `;
  resultDiv.style.display = "block";
}

// Clear all numbers and reset the interface
function clearAllNumbers() {
  numbersList = [];
  document.getElementById("numberInput").value = "";
  const resultDiv = document.getElementById("multiNumberResult");
  resultDiv.innerHTML = "";
  resultDiv.style.display = "none";
  updateNumbersList();
}

// Update the display of current numbers list
function updateNumbersList() {
  const resultDiv = document.getElementById("multiNumberResult");

  if (numbersList.length > 0) {
    const numbersHtml = numbersList
      .map((num) => `<span class="number-item">${num}</span>`)
      .join("");

    resultDiv.innerHTML = `
            <div class="numbers-list">
                <h4>Current Numbers (${numbersList.length}):</h4>
                ${numbersHtml}
                <p style="margin-top: 10px; font-size: 0.9em; color: #666;">
                    Add more numbers or click "Calculate All Numbers" to perform the operation.
                </p>
            </div>
        `;
    resultDiv.style.display = "block";
  } else {
    resultDiv.innerHTML = "";
    resultDiv.style.display = "none";
  }
}

// Display error message
function displayError(container, message) {
  container.innerHTML = `<div class="error">Error: ${message}</div>`;
  container.style.display = "block";
}

// ===== TESTING SECTION (FOR YOUR REFERENCE) =====
// Uncomment the following code to test your functions in the console

/*
// Test Arrow Functions
console.log('=== Testing Arrow Functions ===');
console.log('isValidNumber("5"):', isValidNumber("5")); // Should be true
console.log('isValidNumber(""):', isValidNumber("")); // Should be false
console.log('isValidNumber("abc"):', isValidNumber("abc")); // Should be false

// Test Function Expressions
console.log('=== Testing Function Expressions ===');
console.log('add(5, 3):', add(5, 3)); // Should be 8
console.log('divide(10, 2):', divide(10, 2)); // Should be 5
console.log('getOperationFunction("add"):', getOperationFunction("add")); // Should return add function

// Test Callback Functions
console.log('=== Testing Callback Functions ===');
console.log('calculateWithCallback([1,2,3], "add"):', calculateWithCallback([1,2,3], "add")); // Should be 6
console.log('calculateWithCallback([10,2], "divide"):', calculateWithCallback([10,2], "divide")); // Should be 5
*/

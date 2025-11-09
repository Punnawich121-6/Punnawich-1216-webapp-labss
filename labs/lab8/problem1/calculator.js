// calculator.js
// Import readline module for user input
const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get command line arguments (skip first 2: node and script name)
const args = process.argv.slice(2);

// Function to validate if a string is a number
function isValidNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

// Function to perform calculation
function calculate(num1, num2, operation) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    
    if (operation === 'add') {
        console.log(`${a} + ${b} = ${a + b}`);
    } else if (operation === 'subtract') {
        console.log(`${a} - ${b} = ${a - b}`);
    } else {
        console.log('Unknown operator');
    }
}

// Main logic
if (args.length === 2) {
    // Two arguments provided - prompt for operation
    const num1 = args[0];
    const num2 = args[1];
    
    // Validate numbers
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        console.log('Please enter two numbers');
        process.exit(1);
    }
    
    // Prompt for operation
    rl.question('✓ add | subtract ', (operation) => {
        calculate(num1, num2, operation.trim());
        rl.close();
    });
    
} else if (args.length === 3) {
    // Three arguments: num1, num2, operation
    const num1 = args[0];
    const num2 = args[1];
    const operation = args[2];
    
    // Validate numbers
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        console.log('Please enter two numbers');
        process.exit(1);
    }
    
    // Perform calculation
    console.log(`✓ add | subtract ${operation}`);
    calculate(num1, num2, operation);
    
} else if (args.length === 0) {
    // No arguments - prompt for numbers
    console.log('Please enter two numbers');
    process.exit(0);
    
} else if (args.length === 1) {
    // Only one argument
    if (args[0] === 'a' || args[0] === 'b') {
        console.log('Please enter two numbers');
        process.exit(0);
    } else {
        console.log('Please enter two numbers');
        process.exit(0);
    }
}
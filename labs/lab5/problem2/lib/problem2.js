let userInput;
let lists = [];

do {
    userInput = prompt("Enter an integer (a negative integer to quit):");
    userInput = parseInt(userInput);

    if (!isNaN(userInput) && userInput >= 0) {
        lists.push(userInput);
    }
} while (isNaN(userInput) || userInput >= 0);

if (lists.length > 0) {
    let sum = lists.reduce((acc, val) => acc + val, 0);
    let averages = sum / lists.length;
    let minimums = Math.min(...lists);
    let maximums = Math.max(...lists);

    alert("For the list " + lists + ", the average is " + averages.toFixed(2) +
          ", the minimum is " + minimums + ", and the maximum is " + maximums);
} else {
    alert("No valid numbers were entered.");
}

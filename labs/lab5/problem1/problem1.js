let userInput;

do {
    userInput = prompt("Enter a positive integer:");
    userInput = parseInt(userInput);
} while (isNaN(userInput) || userInput <= 0);

function isPrime(n) {
    if (n <= 1) return false;
    for (let divisor = 2; divisor * divisor <= n; divisor++) {
        if (n % divisor === 0) return false;
    }
    return true;
}

function getPrimes(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

const primes = getPrimes(userInput);
alert("For n = " + userInput + ", prime numbers are: " + primes);

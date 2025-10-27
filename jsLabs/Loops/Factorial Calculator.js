let num = 20;

function factorialCalculator(num) {
    let result = 1;
    let i = 1;
    while
    (i <= num) {
        result *= i;
        i++;
    } return result
}

const factorial = factorialCalculator(num);
console.log(factorial);

const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

function getFibonator() {
    let num1 = 1;
    let num2 = 1;

    return function () {
        let result = num1;
        num1 = num2;
        num2 = result + num2;

        return result;
    };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13


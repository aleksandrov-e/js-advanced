
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.sum = function () {
        return this.reduce((total, number) => total + number, 0);
    };

    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
const numbers = [10, 20, 30, 40, 50];

console.log(numbers.last());    // 50
console.log(numbers.skip(2));   // [30, 40, 50]
console.log(numbers.take(3));   // [10, 20, 30]
console.log(numbers.sum());     // 150
console.log(numbers.average()); // 30

console.log(numbers);           // [10, 20, 30, 40, 50]
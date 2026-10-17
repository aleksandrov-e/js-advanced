function add(n) {
    let sum = 0;
    sum += n

    function inner(x) {
        sum += x;
        return inner;
    }

    inner.toString = function () {
        return sum;
    };

    return inner;
}
console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());


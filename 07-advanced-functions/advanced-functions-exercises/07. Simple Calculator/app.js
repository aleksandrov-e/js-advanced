function calculator() {

    // TODO:
    let object = {
        firstNumber: null,
        secondNumber: null,
        result: null,
        init(selector1, selector2, result) {

            this.firstNumber = document.querySelector(selector1);
            this.secondNumber = document.querySelector(selector2);
            this.result = document.querySelector(result);
        },
        add() {
            let sum = Number(this.firstNumber.value) + Number(this.secondNumber.value);
            this.result.value = sum;
        },
        subtract() {
            let sum = Number(this.firstNumber.value) - Number(this.secondNumber.value);
            this.result.value = sum;
        }


    }

    return object;
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
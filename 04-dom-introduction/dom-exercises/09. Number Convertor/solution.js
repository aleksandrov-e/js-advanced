
function solve() {
    let input = document.getElementById('input');
    let selectMenuTo = document.getElementById('selectMenuTo');
    let result = document.getElementById('result');
    let button = document.querySelector('button');

    button.addEventListener('click', function () {
        let number = Number(input.value);
        let selectedOption = selectMenuTo.value;
        let converted = 0;
        if (selectedOption === 'binary') {
           converted =  number.toString(2);
        } else if (selectedOption === 'hexadecimal') {
            converted = number.toString(16).toUpperCase();
        }
        result.value = converted
    });
}
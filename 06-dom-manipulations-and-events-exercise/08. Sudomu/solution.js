  
function solve() {
    let table = document.querySelector('table');
    let inputs = Array.from(document.querySelectorAll('tbody input'));
    let buttons = document.querySelectorAll('button');
    let message = document.querySelector('#check p');

    buttons[0].addEventListener('click', function () {
        let numbers = inputs.map(input => Number(input.value));

        let valid = numbers.every(num =>
            Number.isInteger(num) && num >= 1 && num <= 3
        );

        for (let i = 0; i < 3; i++) {
            let row = numbers.slice(i * 3, i * 3 + 3);

            if (new Set(row).size !== 3) {
                valid = false;
            }
        }

        for (let col = 0; col < 3; col++) {
            let column = [];

            for (let row = 0; row < 3; row++) {
                column.push(numbers[row * 3 + col]);
            }

            if (new Set(column).size !== 3) {
                valid = false;
            }
        }

        if (valid) {
            table.style.border = '2px solid green';
            message.textContent = 'You solve it! Congratulations!';
            message.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            message.textContent = 'NOP! You are not done yet...';
            message.style.color = 'red';
        }
    });

    buttons[1].addEventListener('click', function () {
        inputs.forEach(input => {
            input.value = '';
        });

        table.style.border = '';
        message.textContent = '';
        message.style.color = '';
    });
}

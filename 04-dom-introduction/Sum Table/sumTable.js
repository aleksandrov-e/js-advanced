function sumTable() {
   let tdElements = document.querySelectorAll('td');
    let sum = 0;
    for (let index = 1; index < tdElements.length - 2; index += 2) {
        let price = Number(tdElements[index].textContent);

        sum += price;

    }

    let sumElement = document.getElementById('sum');
    sumElement.textContent = sum;
}
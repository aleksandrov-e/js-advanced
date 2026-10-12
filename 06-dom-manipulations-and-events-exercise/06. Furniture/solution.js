function solve() {
  let textareas = document.querySelectorAll('textarea');
  let buttons = document.querySelectorAll('button');
  let tableBody = document.querySelector('tbody');


  buttons[0].addEventListener('click', function onclick(e) {
    let furniture = JSON.parse(textareas[0].value);
    furniture.forEach(product => {
      let trElement = document.createElement('tr');

      let imageTd = document.createElement('td');
      let img = document.createElement('img');
      img.src = product.img;
      imageTd.appendChild(img);

      let nameTd = document.createElement('td');
      nameTd.textContent = product.name;

      let priceTd = document.createElement('td');
      priceTd.textContent = product.price;

      let decorationFactorTd = document.createElement('td');
      decorationFactorTd.textContent = product.decFactor;

      let markTd = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      markTd.appendChild(checkbox);

      trElement.appendChild(imageTd);
      trElement.appendChild(nameTd);
      trElement.appendChild(priceTd);
      trElement.appendChild(decorationFactorTd);
      trElement.appendChild(markTd);

      tableBody.appendChild(trElement);
    })
  })
  buttons[1].addEventListener('click', function () {
    let checkboxes = document.querySelectorAll(
      'tbody input[type="checkbox"]:checked'
    );

    let boughtFurniture = [];
    let totalPrice = 0;
    let totalDecorationFactor = 0;

    checkboxes.forEach(checkbox => {
      let row = checkbox.parentElement.parentElement;

      let name = row.children[1].textContent;
      let price = Number(row.children[2].textContent);
      let decFactor = Number(row.children[3].textContent);

      boughtFurniture.push(name);
      totalPrice += price;
      totalDecorationFactor += decFactor;
    });

    let averageDecorationFactor = checkboxes.length > 0
      ? totalDecorationFactor / checkboxes.length
      : 0;

    textareas[1].value =
      `Bought furniture: ${boughtFurniture.join(', ')}\n` +
      `Total price: ${totalPrice.toFixed(2)}\n` +
      `Average decoration factor: ${averageDecorationFactor}`;
  });
}
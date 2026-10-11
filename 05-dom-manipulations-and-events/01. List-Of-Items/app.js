function addItem() {
    let ulList = document.getElementById('items');
    let input = document.getElementById('newItemText');
    let newItem = document.createElement('li');
    newItem.textContent = input.value
    ulList.appendChild(newItem);
}
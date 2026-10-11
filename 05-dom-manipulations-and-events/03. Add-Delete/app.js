function addItem() {
    let ulList = document.getElementById('items');
    let input = document.getElementById('newItemText');
    let newItem = document.createElement('li');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Отстрани';
    newItem.textContent = input.value
    newItem.appendChild(deleteButton)
    ulList.appendChild(newItem);
    deleteButton.addEventListener('click', function() {
       newItem.remove()
    });
    input.value = "";
}
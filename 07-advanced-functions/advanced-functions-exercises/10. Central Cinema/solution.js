
function solve() {
    const form = document.getElementById('add-new');
    const inputs = form.querySelectorAll('input');

    const nameInput = inputs[0];
    const hallInput = inputs[1];
    const priceInput = inputs[2];

    const moviesList = document.querySelector('#movies ul');
    const archiveList = document.querySelector('#archive ul');
    const clearButton = document.querySelector('#archive button');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const hall = hallInput.value.trim();
        const price = Number(priceInput.value);

        if (!name || !hall || !priceInput.value.trim()
            || !Number.isFinite(price)) {
            return;
        }

        const li = document.createElement('li');

        const movieName = document.createElement('span');
        movieName.textContent = name;

        const hallName = document.createElement('strong');
        hallName.textContent = `Hall: ${hall}`;

        const div = document.createElement('div');

        const ticketPrice = document.createElement('strong');
        ticketPrice.textContent = price.toFixed(2);

        const ticketsInput = document.createElement('input');
        ticketsInput.placeholder = 'Tickets Sold';

        const archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';

        div.append(ticketPrice, ticketsInput, archiveButton);
        li.append(movieName, hallName, div);
        moviesList.appendChild(li);

        nameInput.value = '';
        hallInput.value = '';
        priceInput.value = '';

        archiveButton.addEventListener('click', () => {
            const ticketsText = ticketsInput.value.trim();
            const tickets = Number(ticketsText);

            if (!ticketsText || !Number.isFinite(tickets)
                || tickets < 0) {
                return;
            }

            const total = price * tickets;

            const archiveLi = document.createElement('li');

            const archivedName = document.createElement('span');
            archivedName.textContent = name;

            const totalAmount = document.createElement('strong');
            totalAmount.textContent =
                `Total amount: ${total.toFixed(2)}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            archiveLi.append(archivedName, totalAmount, deleteButton);
            archiveList.appendChild(archiveLi);

            deleteButton.addEventListener('click', () => {
                archiveLi.remove();
            });

            li.remove();
        });
    });

    clearButton.addEventListener('click', () => {
        archiveList.replaceChildren();
    });
}

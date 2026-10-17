
function solve() {
    let addBtn = document.getElementById('add');

    addBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let task = document.getElementById('task').value;
        let description = document.getElementById('description').value;
        let date = document.getElementById('date').value;

        if (task.trim() === '' || description.trim() === '' || date.trim() === '') {
            return;
        }

        let sections = document.querySelectorAll('section');
        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = task;
        article.appendChild(h3);

        let descriptionP = document.createElement('p');
        descriptionP.textContent = description;
        article.appendChild(descriptionP);

        let dateP = document.createElement('p');
        dateP.textContent = date;
        article.appendChild(dateP);

        let buttonDiv = document.createElement('div');
        buttonDiv.className = 'flex';
        article.appendChild(buttonDiv);

        let startBtn = document.createElement('button');
        startBtn.className = 'green';
        startBtn.textContent = 'Start';
        buttonDiv.appendChild(startBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'red';
        deleteBtn.textContent = 'Delete';
        buttonDiv.appendChild(deleteBtn);

        sections[1].querySelectorAll('div')[1].appendChild(article);

        deleteBtn.addEventListener('click', () => {
            article.remove();
        });

        startBtn.addEventListener('click', () => {
            sections[2].querySelectorAll('div')[1].appendChild(article);
            startBtn.remove();

            let finishBtn = document.createElement('button');
            finishBtn.className = 'orange';
            finishBtn.textContent = 'Finish';
            buttonDiv.prepend(finishBtn);

            finishBtn.addEventListener('click', () => {
                sections[3].querySelectorAll('div')[1].appendChild(article);
                buttonDiv.remove();
            });
        });
    });
}

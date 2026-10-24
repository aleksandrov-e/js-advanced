
class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    render(id) {
        let article = document.createElement('article');

        let divTitlte = document.createElement('div');
        divTitlte.className = 'title';
        divTitlte.textContent = `${this.firstName} ${this.lastName}`;

        let infoButton = document.createElement('button');
        infoButton.textContent = '\u2139';
        divTitlte.appendChild(infoButton);

        let divInfo = document.createElement('div');
        divInfo.className = 'info';
        divInfo.style.display = 'none';

        let spanPhone = document.createElement('span');
        spanPhone.textContent = `\u260E ${this.phone}`;

        let spanEmail = document.createElement('span');
        spanEmail.textContent = `\u2709 ${this.email}`;

        divInfo.appendChild(spanPhone);
        divInfo.appendChild(spanEmail);

        article.appendChild(divTitlte);
        article.appendChild(divInfo);

        infoButton.addEventListener('click', () => {
            if (divInfo.style.display === 'none') {
                divInfo.style.display = 'block';
            } else {
                divInfo.style.display = 'none';
            }
        });

        document.getElementById(id).appendChild(article);
    }
}
const contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];

contacts.forEach(contact => contact.render("main"));

setTimeout(() => {
    contacts[1].online = true;
}, 2000);

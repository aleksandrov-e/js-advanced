function validate() {
   let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', (e) => {
        const regex = /^[a-z]+\@[a-z]+\.[a-z]+$/gm;

        if (regex.exec(e.currentTarget.value) !== null) {
            e.currentTarget.classList.remove('error');
        } else {

            e.currentTarget.classList.add('error');
        }

    })
}
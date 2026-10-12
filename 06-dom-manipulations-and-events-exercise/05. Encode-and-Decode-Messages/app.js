function encodeAndDecodeMessages() {

    let buttonElements = document.querySelectorAll('#main button');

    let encodeButtonElement = buttonElements[0];
    let decodeButtonElement = buttonElements[1];


    encodeButtonElement.addEventListener('click', (e) => {
        let text = e.currentTarget.parentNode.querySelector('textarea').value;
        let newText = '';
        for (let character of text) {
            let asci = character.charCodeAt(0);
            asci += 1;
            let newChar = String.fromCharCode(asci);
            newText += newChar;
        }
        decodeButtonElement.parentNode.querySelector('textarea').value = newText;
        e.currentTarget.parentNode.querySelector('textarea').value = '';

    })

    decodeButtonElement.addEventListener('click', (e) => {
        let text = e.currentTarget.parentNode.querySelector('textarea').value;
        let newText = '';
        for (let character of text) {
            let asci = character.charCodeAt(0);
            asci -= 1;
            let newChar = String.fromCharCode(asci);
            newText += newChar;
        }
        decodeButtonElement.parentNode.querySelector('textarea').value = newText;

    })
}
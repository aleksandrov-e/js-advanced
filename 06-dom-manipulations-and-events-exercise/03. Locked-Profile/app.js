function lockedProfile() {
    let buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', function onclick(e){
        let lockBtn = e.currentTarget.parentNode.querySelector('input[value="lock"]');
        let unlockBtn = e.currentTarget.parentNode.querySelector('input[value="unlock"]');
        let hiddenDiv = e.currentTarget.parentNode.querySelector('[id$="HiddenFields"]');
        if (lockBtn.checked) {
            hiddenDiv.style.display = '';
        }
        if (unlockBtn.checked) {
            hiddenDiv.style.display = 'block';
        }
    }))
}
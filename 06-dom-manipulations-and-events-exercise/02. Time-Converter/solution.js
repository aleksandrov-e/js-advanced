
function attachEventsListeners() {
    let buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => button.addEventListener('click', function (e) {
        let value;
        let totalSeconds;

        if (e.currentTarget.id === 'daysBtn') {
            value = Number(document.getElementById('days').value);
            totalSeconds = value * 24 * 60 * 60;
        } else if (e.currentTarget.id === 'hoursBtn') {
            value = Number(document.getElementById('hours').value);
            totalSeconds = value * 60 * 60;
        } else if (e.currentTarget.id === 'minutesBtn') {
            value = Number(document.getElementById('minutes').value);
            totalSeconds = value * 60;
        } else if (e.currentTarget.id === 'secondsBtn') {
            value = Number(document.getElementById('seconds').value);
            totalSeconds = value;
        }

        document.getElementById('days').value = totalSeconds / (24 * 60 * 60);
        document.getElementById('hours').value = totalSeconds / (60 * 60);
        document.getElementById('minutes').value = totalSeconds / 60;
        document.getElementById('seconds').value = totalSeconds;
    }));
}

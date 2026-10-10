function generateReport() {
    let checkBoxes = document.querySelectorAll('thead input[type=checkbox]');
    let rows = document.querySelectorAll('tbody tr');
    let report = [];
    
    for (const row of rows) {
        let cells = row.querySelectorAll('td');
        let obj = {};

        for (let i = 0; i < checkBoxes.length; i++) {
            if (checkBoxes[i].checked) {
                obj[checkBoxes[i].name] = cells[i].textContent
            }
        }
        report.push(obj);
    }
    document.getElementById('output').value = JSON.stringify(report, null, 2);
}
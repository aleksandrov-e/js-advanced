function deleteByEmail() {
    let info = Array.from(document.querySelectorAll('tbody tr')); 
    let input = document.querySelector('input[name = "email"] ').value
    let result = document.getElementById('result');
    
    let matches = info.filter(r => r.children[1].textContent === input);

    if (matches.length > 0) {
        matches.forEach(r => r.remove())
        result.textContent = "Deleted";
    }
    else{
        result.textContent = "Not found";
    }
}
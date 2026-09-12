function extractText(){
    let elements = document.getElementsByTagName('li');
    let elementText = Array.from(elements).map(e => e.textContent)
    const textArea = document.getElementById('result');
    textArea.value = elementText.join("\n");
}




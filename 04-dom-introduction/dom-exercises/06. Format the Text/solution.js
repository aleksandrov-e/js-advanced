function solve() {
    let input = document.getElementById('input');
    let output = document.getElementById('output');
    let button = document.getElementById('formatItBtn');

    button.addEventListener('click',() => {
       let sentences = input.value.split(".").filter(x => x != "")
       let paragraphs = [];
       for (let i = 0; i < sentences.length; i += 3) {
          let current = sentences.slice(i, i + 3);
          let paragraph = `<p>${current.join(". ")}.</p>`;
          paragraphs.push(paragraph);
       }
       output.innerHTML = paragraphs.join("");
    })
}
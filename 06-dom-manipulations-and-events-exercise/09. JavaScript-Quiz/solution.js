function solve() {
    let sections = document.querySelectorAll('section');
    let results = document.querySelector('#results');
    let resultText = document.querySelector('#results h1');
    let currentQuestion = 0;
    let rightAnswers = 0;
    results.style.display = "none";
    sections.forEach(section => section.style.display = "none");
    sections[0].style.display = "block";
    let restartBrn = document.getElementById('restart');
    restartBrn.style.display = "none";


    sections.forEach((section, index) => {
        let answers = section.querySelectorAll('.quiz-answer');

        answers.forEach(answer => {
            answer.addEventListener('click', function onclick() {
                let text = answer.querySelector('.answer-text').textContent;

                if (index === 0 && text === "onclick" || index === 1 && text === "JSON.stringify()" || index === 2 && text === "A programming API for HTML and XML documents") {
                    rightAnswers++;
                }
                section.style.display = 'none';
                currentQuestion++;

                if (currentQuestion < sections.length) {
                    sections[currentQuestion].style.display = 'block';
                } else {
                    results.style.display = 'block';

                    if (rightAnswers === 3) {
                        resultText.textContent =
                            'You are recognized as top JavaScript fan!';
                    } else {
                        resultText.textContent =
                            `You have ${rightAnswers} right answers`;
                            restartBrn.style.display = "block";
                    }
                }
            })
        })
    })
    restartBrn.addEventListener('click',function onclick(){
                                rightAnswers = 0;
                                currentQuestion = 0;
                                results.style.display = "none";
                                sections[1].style.display = "none";
                                sections[2].style.display = "none";
                                sections[0].style.display = "block";
                                restartBrn.style.display = "none"
                            }) 
}

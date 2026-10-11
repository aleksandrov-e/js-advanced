function validate() {
    let input = document.getElementById('email');

    input.addEventListener('input', check)

    function check(ev){
       let pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;
       let match = pattern.exec(ev.currentTarget.value)

       if (match == null) {
          ev.currentTarget.className = 'error';
       }else{
          ev.currentTarget.classList.remove('error');
       }
    }
}
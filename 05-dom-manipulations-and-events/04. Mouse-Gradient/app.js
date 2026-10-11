function attachGradientEvents() {
    let btn = document.getElementById('gradient');
    let result = document.getElementById('result');

    btn.addEventListener('mousemove' , onMove);
    btn.addEventListener('mouseout', onExit);

    function onMove(event){
       const offsetX = event.offsetX
       const percent = Math.trunc(offsetX / event.target.clientWidth * 100);
       result.textContent = (`${percent}%`);
    }
    function onExit(){
        result.textContent = "";
    }
}
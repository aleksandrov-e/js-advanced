function create(words) {
   let divs = []
   for (const word of words) {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');

      pElement.textContent = word
      pElement.style.display = 'none';
      divElement.appendChild(pElement);
      divs.push(divElement)
   }
   let finalDiv = document.getElementById('content')
   for (const div of divs) {
      div.addEventListener('click', function onclick(e) {
         let pElement = e.currentTarget.querySelector('p');

         if (pElement.style.display === 'none') {
            pElement.style.display = '';
         } else {
            pElement.style.display = 'none';
         }

      }
      )
      finalDiv.appendChild(div);
   }
}
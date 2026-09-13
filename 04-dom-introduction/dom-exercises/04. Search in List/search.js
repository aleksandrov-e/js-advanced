function search() {
   let elements = document.getElementsByTagName('li');
   let search = document.getElementById('searchText');
   let result = document.getElementById('result');

   let counter = 0;

   for (const element of elements) {
      if (element.textContent.includes(search.value)) {
          element.style.textDecoration = "underline";
          element.style.fontWeight = "bold";
          counter++;
      }else {
          element.style.textDecoration = "none";
          element.style.fontWeight = "normal";
      }
   }
   result.textContent = `${counter} matches found`;
}
function clearSearch() {
    let elements = document.getElementsByTagName('li');
    let search = document.getElementById('searchText');
    let result = document.getElementById('result');

    search.value = '';

    for (const element of elements) {
        element.style.textDecoration = "none";
        element.style.fontWeight = "normal";
    }

    result.textContent = '';
}


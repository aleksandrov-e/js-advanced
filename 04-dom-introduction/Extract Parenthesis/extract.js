function extract(content) {
   let element = document.getElementById(content).textContent;
   let regex = /\((.*?)\)/g;
   let matches = element.match(regex);
   return matches.join("; ");
}
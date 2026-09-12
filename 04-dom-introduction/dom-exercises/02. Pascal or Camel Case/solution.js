function solve() {
   let text = document.getElementById('text').value.toLowerCase();
   let namingConvention = document.getElementById('naming-convention').value
   let result = document.getElementById('result');

   let words = text.split(" ");
   if (namingConvention === "Camel Case") {
      let camelCase = words[0];
      for (let i = 0; i < words.length; i++) {
        camelCase += words[i][0].toUpperCase() + words[i].slice(1);        
      }
      result.textContent = camelCase
   }
   else if(namingConvention === "Pascal Case"){
       let pascal = '';
       for (let i = 0; i < words.length; i++) {
          pascal += words[i][0].toUpperCase() + words[i].slice(1);
        
       }
       result.textContent = pascal
   }else{
      result.textContent = "Error";
   }
  }
   
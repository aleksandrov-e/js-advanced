function solve() {
   let buttons = document.querySelectorAll('button.add-product');
   let checkout = document.querySelector('button.checkout');
   let textArea = document.querySelector('textarea');
   buttons.forEach(i => {
      i.addEventListener('click', onclick)
   })
   let sum = 0;
   let list = [];
   
   function onclick(ev) {
      let product = ev.currentTarget.parentElement.parentElement;
      let productName = product.querySelector('.product-title').textContent;
      let productPrice = Number(product.querySelector('.product-line-price').textContent)
      sum += productPrice;
      list.push(productName)
      textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   }
   checkout.addEventListener('click', finalCheck)
   function finalCheck() {
      let uniqueProducts = [...new Set(list)];
      textArea.value += `You bought ${uniqueProducts.join(", ")} for ${sum.toFixed(2)}`
      document.querySelectorAll('button').forEach(button => {
      button.disabled = true;
   });
   }
   
}
function fruit(fruit,weightInGrams,pricePerkilogram){
   let weightInKilograms = weightInGrams / 1000;
   let price = weightInKilograms * pricePerkilogram;
   console.log(`I need $${price.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}`);
}
fruit('orange',2500,1.80);
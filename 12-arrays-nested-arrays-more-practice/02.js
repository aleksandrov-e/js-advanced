function solve(arr){
  let evenNumb = [];
  for (let number of arr) {
     if (number % 2 === 0) {
        evenNumb.push(number);
     }
  }
   return evenNumb;
}
solve([5,1,2,4,6,10]);
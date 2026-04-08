function smallest(arr){
  let first = Infinity;
  let second = Infinity;

  for (let number of arr) {
    if (number < first) {
        second = first;
        first = number;
        
    }else if(number < second){
        second = number
    }
  }
  console.log(first + " " + second);
}
smallest([30, 15, 50, 5]);
// ----------------------------------
function secondSolve(arr){
  let sort = arr.sort((a,b) => a - b);
  console.log(sort.slice(0,2).join(" "));
}
secondSolve([30,15,50,5])
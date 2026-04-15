function solve(input){
   let sum = 0;
    for (let row of input) {
     for (let num  of row) {
        sum += num;
     }
   }
   return sum;
}
solve([
 [1,2,3],
 [4,5,6]
])
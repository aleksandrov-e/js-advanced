function solve(arr){
   let max = -Infinity;
   for (let row of arr) {
      for (let num of row) {
        if (num > max) {
            max = num
        }
      }
   }
   return max;
}
solve([
 [1, 2, 3],
 [4, 5, 6]
]);
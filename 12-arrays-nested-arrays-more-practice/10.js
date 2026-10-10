function solve(arr){
   let max = -Infinity;
   for (let num of arr) {
      if (num > max) {
        max = num;
      }
   }
   return max;
}
solve([5,10,3,4,2])
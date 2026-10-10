function solve(arr){
   let sum = 0;
   for (let num of arr) {
      sum += num;
   }
   let avg = sum / arr.length;
   return arr.filter(x => x > avg);
}
solve([4,1,5,10,15,6]);
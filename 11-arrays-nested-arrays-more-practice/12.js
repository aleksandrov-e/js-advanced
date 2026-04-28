function solve(arr){
   let summary = {};
   let average = arr.reduce((sum,x) => sum + x,0) / arr.length;
   let max = Math.max(...arr);
   let min = Math.min(...arr);
   let passedCounter = arr.filter(x => x >= 4).length;
   summary.average = average;
   summary.max = max
   summary.min = min
   summary.passed = passedCounter;
   return summary; 
}
solve([3, 4, 6, 2, 5, 6, 6, 4])
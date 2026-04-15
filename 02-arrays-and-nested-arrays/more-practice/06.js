function solve(input){
  let result = [];
  for (let row of input) {
     let currentSum = 0;
     for (let num of row) {
        currentSum += num;
     }
     result.push(currentSum);
  }
  return result;
}
solve([
 [1,2,3],
 [4,5,6]
]);
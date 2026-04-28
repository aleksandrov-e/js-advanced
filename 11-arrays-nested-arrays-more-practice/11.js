function solve(arr){
  let result = arr.filter(x => x % 2 === 0)
  .reduce((sum,x) => sum + x * 2,0);
  console.log(result);
}
solve([2,10,4,5,8]);
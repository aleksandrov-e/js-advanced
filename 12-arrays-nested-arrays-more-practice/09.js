function solve(arr,k){
  let sum = 0;
  for (let i = 0; i < k; i++) {
     sum += arr[i];
  }
  let max = sum;
  for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];
    max = Math.max(max, sum);
  }
  console.log(max);
}
solve([2, 1, 5, 1, 3, 2],3);
function diagonals(input){
  let sum = 0
  for (let i = 0; i < input.length; i++) {
    sum += input[i][i];
  }
  return sum;
}
diagonals([
 [1,2,3],
 [4,5,6],
 [7,8,9]
])
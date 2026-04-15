function sumColumns(input){
  let result = [];
  for (let col = 0; col < input[0].length; col++) {
    let sum = 0;
    for (let row = 0; row < input.length; row++) {
        sum += input[row][col];
    }
    result.push(sum);
  }
  return result;
}
sumColumns([
 [1,2,3],
 [4,5,6]
]);
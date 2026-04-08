function diagonal(input) {
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;

  for (let i = 0; i < input.length; i++) {
    firstDiagonalSum += input[i][i];
    secondDiagonalSum += input[i][input.length - 1 - i];
  }

  console.log(firstDiagonalSum, secondDiagonalSum);
}
diagonal([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89]
]);

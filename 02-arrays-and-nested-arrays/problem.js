function sumColumns(input) {
  let cols = input[0].length;

  for (let col = 0; col < cols; col++) {
    let sum = 0;

    for (let row = 0; row < input.length; row++) {
      sum += input[row][col];
    }

    console.log(sum);
  }
}

sumColumns([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89]
]);
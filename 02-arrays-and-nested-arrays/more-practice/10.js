function equalNeighbors(matrix) {
  let count = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {

      if (col + 1 < matrix[row].length &&
          matrix[row][col] === matrix[row][col + 1]) {
        count++;
      }
      if (row + 1 < matrix.length &&
          matrix[row][col] === matrix[row + 1][col]) {
        count++;
      }

    }
  }

  return count;
}
[
 ['a','b','b'],
 ['c','b','b']
]
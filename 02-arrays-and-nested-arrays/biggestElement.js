function biggestElement(input){
   let number = -Infinity;
    for (let row = 0; row < input.length; row++) {
     for (let col = 0; col < input[row].length; col++) {
        if (input[row][col] >= number) {
            number = input[row][col];
        }
     }
  }
  console.log(number);
}
biggestElement([[20, 50, 10],
 [8, 33, 145]]
);
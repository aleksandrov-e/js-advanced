function equalNeighbors(arr){
   let counter = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i+1]) {
        counter++;
      }
   }
   console.log(counter);
}
equalNeighbors([1, 1, 2, 3, 3, 3, 4]);
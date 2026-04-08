function biggerHalf(arr){
   let sorted = arr.sort((a,b) => a - b);
   let half = sorted.slice(sorted.length / 2);
   console.log(half);
   
}
biggerHalf([3, 19, 14, 7, 2, 19, 6])
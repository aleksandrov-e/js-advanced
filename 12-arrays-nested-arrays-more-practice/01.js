function solve(arr){
   let m = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      let element = arr[i];
      m.push(element);
   }
   return m;
}
solve([2,4,10,6,5])
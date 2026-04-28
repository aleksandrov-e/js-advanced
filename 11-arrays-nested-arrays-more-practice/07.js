function removeDuplicates(arr){
   let removed = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        removed.push(arr[i]);
      }
   }
   console.log(removed);
}
removeDuplicates([1,1,2,2,3,3,3])
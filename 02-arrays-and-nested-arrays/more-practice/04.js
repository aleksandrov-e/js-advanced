function second(arr){
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
   if (i % 2 === 0) {
      let element = arr[i];
      newArr.push(element);
   }
  }
  return newArr;
}
second([1,4,3,5,6]);
function sec(arr){
   return arr.filter((x,i) => i % 2 === 0)
}
sec([2,3,5,6,7]);
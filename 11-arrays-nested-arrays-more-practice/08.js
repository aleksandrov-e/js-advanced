function longestSeq(arr){
   let current = [arr[0]];
   let best = [];

   for (let i = 0; i < arr.length - 1; i++) {

      if (current[current.length - 1] < arr[i + 1]) {
         current.push(arr[i + 1]);
      } else {
         if (current.length > best.length) {
            best = current.slice();
         }

         current = [arr[i + 1]];
      }
   }
   if (current.length > best.length) {
      best = current.slice();
   }

   return best;
}
longestSeq([1,2,3,2,3,4,5,1]);
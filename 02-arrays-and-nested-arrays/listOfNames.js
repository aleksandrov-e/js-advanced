function list(arr){
   let sorted = arr.sort((a,b) => a.localeCompare(b))
   sorted.forEach((name,i) => {
      console.log(`${i+ 1}.${name}`);
   });
}
list(["John", "Bob", "Christina", "Ema"]);
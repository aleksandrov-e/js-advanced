function biggest(arr){
  let first = -Infinity;
  let second = -Infinity;

  for (let number of arr) {
    if (number > first) {
        second = first;
        first = number;
        
    }else if(number > second){
        second = number
    }
  }
  console.log(first + " " + second);
}
biggest([30, 15, 50, 5]);
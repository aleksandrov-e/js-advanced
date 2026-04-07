function sameNumbers(num){
  let string = num.toString();
  let sum = 0;
  let isSame = true;
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i]);
    if (string[i] !== string[i+1] && i < string.length - 1) {
       isSame = false;
    }
  }
  console.log(`${isSame} \n ${sum}`);
}
sameNumbers(2252222)
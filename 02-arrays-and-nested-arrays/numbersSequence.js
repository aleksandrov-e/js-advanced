function numbers(n, k) {
  let arr = [1];

  for (let i = 1; i < n; i++) {
    let sum = 0;

    for (let j = Math.max(0, arr.length - k); j < arr.length; j++) {
      sum += arr[j];
    }

    arr.push(sum);
  }
  return arr;
}
console.log(numbers(6, 3));
// vtori nachin -----------
function numbers(n, k) {
  let arr = [1];

  for (let i = 1; i < n; i++) {
    let lastK = arr.slice(-k);  
    let sum = lastK.reduce((a, b) => a + b, 0);

    arr.push(sum);
  }

  console.log(arr);
}

numbers(6, 3);
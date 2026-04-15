function solve(arr){
   let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num % 2 === 0) {
            var result = num * 2;
            newArr.push(result);
        }else{
            result = num / 2;
            newArr.push(result);
        }
    }
   console.log(newArr);
}
solve([1, 2, 3, 4]);
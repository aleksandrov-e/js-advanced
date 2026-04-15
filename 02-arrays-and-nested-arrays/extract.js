function nonDecreasingSubset(arr) {
    let biggest = -Infinity;
    let result = [];
    for (let num of arr) {
        if (num >= biggest) {
            biggest = num;
            result.push(num);
        }
    }
    console.log(result);
}
nonDecreasingSubset([1, 
3, 
8, 
4, 
10, 
12, 
3, 
2, 
24]);

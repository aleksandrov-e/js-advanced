function sorting(arr){
   let result = [];
   let sorted = arr.sort((a,b) => a - b);
   
    while (sorted.length > 0) {
        result.push(arr.shift());
        result.push(arr.pop());
    }

    return result;
    
}
sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
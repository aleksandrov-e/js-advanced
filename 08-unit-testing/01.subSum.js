function solve(arr,startIndex,endIndex){
    if (Array.isArray(arr) == false) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0
    }
    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1
    }
    return arr.slice(startIndex,endIndex+1).map(Number).reduce((sum,e) => sum + e,0);
}
console.log(solve([10,'twenty',50,60,30],0,2));
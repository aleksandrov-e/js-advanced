function sort(arr, command) {
    const map = {
        'asc': (a, b) => a - b,
        'dsc': (a, b) => b - a
    }

    return arr.sort(map[command]);

}
console.log(sort([14, 7, 17, 6, 8], 'dsc'));
function solve(arrOne,arrTwo){
  for (let index = 0; index < arrOne.length; index++) {
    let element = arrOne[index];
    if (arrTwo.includes(element)) {
        console.log(element);
    }
  }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)

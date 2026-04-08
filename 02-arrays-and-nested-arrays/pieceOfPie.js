function piece(arr,string1,string2){
  let newArr = [];
  let startIndex = arr.indexOf(string1);
  let endIndex = arr.indexOf(string2)
  for (let i = startIndex; i <= endIndex; i++) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
} 
piece(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)
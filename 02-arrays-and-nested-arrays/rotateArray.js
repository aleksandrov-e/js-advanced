function rotate(arr,rotation){
    for (let i = 0; i < rotation; i++) {
      let lastElement = arr.pop();
      arr.unshift(lastElement);
   }
  console.log(arr.join(" "));
}
rotate(['1', 
'2', 
'3', 
'4'], 
2
)

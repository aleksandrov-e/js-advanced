function solve(number,first,second,third,forth,fifth){
   number = Number(number);
   const parser = {
      dice() { number = Math.sqrt(number)},
      spice() {number += 1},
      chop() {number /= 2},
      bake() {number *= 3},
      fillet() {number -= number * 0.20}
   }
   const commands = [first,second,third,forth,fifth];

   commands.forEach(cmd => {
   parser[cmd]();
   console.log(number);
});
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
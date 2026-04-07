function cooking(number,first,second,third,forth,fifth){
  number = Number(number);
  let operations = [first,second,third,forth,fifth];

  for (let command of operations) {
     switch(command){
        case "chop" : 
        number /= 2;
        break;  
         case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= number * 0.20;
                break;
     }
     console.log(number);
     
  }
}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
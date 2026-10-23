function carRegister(input){
   let register = {};
   
    for (const line of input) {
        let [carBrand, carModel, producedCars] = line.split(" | ");
        producedCars = Number(producedCars);

        if (!register.hasOwnProperty(carBrand)) {
            register[carBrand] = {};
        }

        if (!register[carBrand].hasOwnProperty(carModel)) {
            register[carBrand][carModel] = producedCars;
        } else {
            register[carBrand][carModel] += producedCars;
        }
    }
   for (const key in register) {
      console.log(key);
      let entries = Object.entries(register[key])
      for (const [car,produced] of entries) {
         console.log(`###${car} -> ${produced}`);
      }
   }
}
carRegister(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)
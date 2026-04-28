function solve(arr){
   let registry = {};
   for (let line of arr) {
      let parts = line.split(" <-> ");
      let town = parts[0];
      let population = parts[1];
      population = Number(population);
      if (!registry[town]) {
        registry[town] = population;
      }else{
        registry[town] += population
      }
   }
   for (const key in registry) {
      console.log(`${key} : ${registry[key]}`);
   }
}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)
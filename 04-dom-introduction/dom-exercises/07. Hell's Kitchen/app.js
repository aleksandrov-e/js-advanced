function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs textarea');
   function onClick() {
      let array = JSON.parse(input.value);
      let objects = {};
      for (const restaurantData of array) {
         let [restaurantName, workersData] = restaurantData.split(" - ")
         let workers = workersData.split(", ")

         if (!objects.hasOwnProperty(restaurantName)) {
            objects[restaurantName] = {};
         }
         for (const worker of workers) {
            let [workerName, salary] = worker.split(" ");
            if (!objects[restaurantName].hasOwnProperty(workerName)) {
               objects[restaurantName][workerName] = Number(salary);
            }
         }
      }
      let bestRestaurant = '';
      let bestAverage = 0;
      let bestSalary = 0;
      for (const restaurantName in objects) {
         let salaries = Object.values(objects[restaurantName]);
         let total = salaries.reduce((sum, salary) => sum + salary, 0);
         let average = total / salaries.length;
         let currentBestSalary = Math.max(...salaries);

         if (average > bestAverage) {
            bestAverage = average;
            bestRestaurant = restaurantName;
            bestSalary = currentBestSalary;
         }
      }
      let entries = Object.entries(objects[bestRestaurant]);
      entries.sort((a, b) => b[1] - a[1]);
      let bestRestaurantOutput =
    `Name: ${bestRestaurant} Average Salary: ${bestAverage.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

      let workersOutput = entries
         .map(([name, salary]) => `Name: ${name} With Salary: ${salary}`)
         .join(" ");

      document.querySelector('#bestRestaurant span').textContent = bestRestaurantOutput;
      document.querySelector('#workers span').textContent = workersOutput;
   }
}
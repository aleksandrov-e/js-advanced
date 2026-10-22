class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email;
    }
}
function getPersons() {
    let person0 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let person1 = new Person('Softuni');
    let person2 = new Person('Stephan', 'Johnson', 25);
    let person3 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    let arr = []
    arr.push(person0,person1,person2,person3)
    return arr;
}



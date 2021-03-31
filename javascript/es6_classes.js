class Person {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    greeting() {
        return `Hey!! ${this.name}, Are You From ${this.location}, Right?`
    }
}

const person = new Person('yugesh', 'ind');
console.log(person);
console.log(person.greeting());
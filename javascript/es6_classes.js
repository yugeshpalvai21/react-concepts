class Person {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    greeting() {
        return `Hey!! ${this.name}, Are You From ${this.location}, Right?`
    }
}

class Student extends Person {
    constructor(name, location, branch) {
        super(name, location);
        this.branch = branch;
    }

    greeting() {
        return super.greeting() + ` And Brnch Is ${this.branch}` 
    }
}
// const person = new Person('yugesh', 'ind');
// console.log(person);
// console.log(person.greeting());

const student = new Student('yugesh', 'Ind', 'CSE');
console.log(student);
console.log(student.greeting());
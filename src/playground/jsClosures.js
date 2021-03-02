function outer() {
    counter = 0;
    return function() {
        return ++counter;
    }
}

sum = outer();

// console.log(sum);

// console.dir(sum);

console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());


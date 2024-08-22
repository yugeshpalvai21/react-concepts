// ES6 WAY
const multiplier = {
    numbers: [2,3,4,5,6],
    multiplyBy: 8,
    multiply() {
        return this.numbers.map((number) => number*this.multiplyBy)
    }
}

console.log(multiplier.multiply());
console.log(typeof multiplier.multiply);

//ES5 WAY
// const multiplier = {
//     numbers: [2,3,4,5,6],
//     multiplyBy: 8,
//     multiply: function() {
//         const that = this;
//         this.numbers.forEach(function(number){
//             console.log(number + ' * ' + that.multiplyBy + ' = ' + number*that.multiplyBy);
//         })
//     }
// }

// multiplier.multiply();
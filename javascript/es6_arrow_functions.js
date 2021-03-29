// ES6 WAY
const multiplier = {
    numbers: [2,3,4,5,6],
    multiplyBy: 8,
    multiply() {
        this.numbers.forEach((number) => console.log(number + ' * ' + this.multiplyBy + ' = ' + number*this.multiplyBy))
    }
}

multiplier.multiply();

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
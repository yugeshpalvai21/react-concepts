"use strict";

// ES6 WAY
var multiplier = {
  numbers: [2, 3, 4, 5, 6],
  multiplyBy: 8,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (number) {
      return number * _this.multiplyBy;
    });
  }
};
console.log(multiplier.multiply()); //ES5 WAY
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

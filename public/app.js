"use strict";

// ES6 WAY
var multiplier = {
  numbers: [2, 3, 4, 5, 6],
  multiplyBy: 8,
  multiply: function multiply() {
    var _this = this;

    this.numbers.forEach(function (number) {
      return console.log(number + ' * ' + _this.multiplyBy + ' = ' + number * _this.multiplyBy);
    });
  }
};
multiplier.multiply(); //ES5 WAY
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

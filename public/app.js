"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
console.log(multiplier.multiply());
console.log(_typeof(multiplier.multiply)); //ES5 WAY
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

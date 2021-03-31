"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person = /*#__PURE__*/function () {
  function Person(name, location) {
    _classCallCheck(this, Person);

    this.name = name;
    this.location = location;
  }

  _createClass(Person, [{
    key: "greeting",
    value: function greeting() {
      return "Hey!! ".concat(this.name, ", Are You From ").concat(this.location, ", Right?");
    }
  }]);

  return Person;
}();

var person = new Person('yugesh', 'ind');
console.log(person);
console.log(person.greeting());

"use strict";

var counter = 0;

var handleAddOne = function handleAddOne() {
  // console.log('AddOne Button Clicked')
  counter += 1;
  console.log(counter);
  render();
};

var handleMinusOne = function handleMinusOne() {
  // console.log('MinusOne Button Clicked')
  counter -= 1;
  console.log(counter);
  render();
};

var handleReset = function handleReset() {
  // console.log('Reset Button Clicked')
  counter = 0;
  console.log(counter);
  render();
};

var render = function render() {
  var jsx = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Counter: ", counter), /*#__PURE__*/React.createElement("button", {
    onClick: handleAddOne
  }, "AddOne(+1)"), /*#__PURE__*/React.createElement("button", {
    onClick: handleMinusOne
  }, "MinusOne(-1)"), /*#__PURE__*/React.createElement("button", {
    onClick: handleReset
  }, "Reset"));
  var domElement = document.getElementById('app');
  ReactDOM.render(jsx, domElement);
};

render();

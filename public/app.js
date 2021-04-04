"use strict";

var Header = function Header(props) {
  console.log(props);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, props.title), /*#__PURE__*/React.createElement("p", null, props.description));
};

Header.defaultProps = {
  title: 'Basic Title',
  description: 'Generic description'
};
var domElement = document.getElementById('app');
ReactDOM.render( /*#__PURE__*/React.createElement(Header, null), domElement);

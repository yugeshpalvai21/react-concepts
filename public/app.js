"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TilApp = /*#__PURE__*/function (_React$Component) {
  _inherits(TilApp, _React$Component);

  var _super = _createSuper(TilApp);

  function TilApp() {
    _classCallCheck(this, TilApp);

    return _super.apply(this, arguments);
  }

  _createClass(TilApp, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(AddTopic, null), /*#__PURE__*/React.createElement(Topics, {
        topics: ['first', 'second', 'third']
      }));
    }
  }]);

  return TilApp;
}(React.Component);

var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);

  var _super2 = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super2.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Today I Learned"), /*#__PURE__*/React.createElement("p", null, "small app that stores topics that you learned everyday"));
    }
  }]);

  return Header;
}(React.Component);

var AddTopic = /*#__PURE__*/function (_React$Component3) {
  _inherits(AddTopic, _React$Component3);

  var _super3 = _createSuper(AddTopic);

  function AddTopic() {
    _classCallCheck(this, AddTopic);

    return _super3.apply(this, arguments);
  }

  _createClass(AddTopic, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "newTopic",
        placeholder: "write new topic here.."
      }), /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "Add To List"
      })));
    }
  }]);

  return AddTopic;
}(React.Component);

var Topics = /*#__PURE__*/function (_React$Component4) {
  _inherits(Topics, _React$Component4);

  var _super4 = _createSuper(Topics);

  function Topics() {
    _classCallCheck(this, Topics);

    return _super4.apply(this, arguments);
  }

  _createClass(Topics, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return /*#__PURE__*/React.createElement("div", null, this.props.topics === undefined ? /*#__PURE__*/React.createElement("p", null, "No Topics Found") : this.props.topics.length);
    }
  }]);

  return Topics;
}(React.Component);

var domElement = document.getElementById('app');
ReactDOM.render( /*#__PURE__*/React.createElement(TilApp, null), domElement);

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  function TilApp(props) {
    var _this;

    _classCallCheck(this, TilApp);

    _this = _super.call(this, props);
    _this.state = {
      topics: []
    };
    _this.handleAdd = _this.handleAdd.bind(_assertThisInitialized(_this));
    _this.handleDeleteItem = _this.handleDeleteItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TilApp, [{
    key: "handleAdd",
    value: function handleAdd(item) {
      this.setState(function (prevState) {
        return {
          topics: [].concat(_toConsumableArray(prevState.topics), [item])
        };
      });
    }
  }, {
    key: "handleDeleteItem",
    value: function handleDeleteItem(delItem) {
      console.log("you're trying to delete - ", delItem);
      this.setState(function (prevState) {
        return {
          topics: prevState.topics.filter(function (item) {
            return item != delItem;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(AddTopic, {
        handleAdd: this.handleAdd
      }), /*#__PURE__*/React.createElement(Topics, {
        topics: this.state.topics,
        handleDeleteItem: this.handleDeleteItem
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

  function AddTopic(props) {
    var _this2;

    _classCallCheck(this, AddTopic);

    _this2 = _super3.call(this, props);
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(AddTopic, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var newItem = document.getElementById('newTopic').value;
      document.getElementById('newTopic').value = '';
      this.props.handleAdd(newItem);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
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
      var _this3 = this;

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, this.props.topics.map(function (item) {
        return /*#__PURE__*/React.createElement(Topic, {
          key: item,
          itemValue: item,
          handleDeleteItem: _this3.props.handleDeleteItem
        });
      })));
    }
  }]);

  return Topics;
}(React.Component);

var Topic = /*#__PURE__*/function (_React$Component5) {
  _inherits(Topic, _React$Component5);

  var _super5 = _createSuper(Topic);

  function Topic(props) {
    var _this4;

    _classCallCheck(this, Topic);

    _this4 = _super5.call(this, props);
    _this4.handleDelete = _this4.handleDelete.bind(_assertThisInitialized(_this4));
    return _this4;
  }

  _createClass(Topic, [{
    key: "handleDelete",
    value: function handleDelete(e) {
      this.props.handleDeleteItem(this.props.itemValue);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("li", null, this.props.itemValue, " \xA0\xA0\xA0", /*#__PURE__*/React.createElement("button", {
        onClick: this.handleDelete
      }, "Delete This Item"));
    }
  }]);

  return Topic;
}(React.Component);

var domElement = document.getElementById('app');
ReactDOM.render( /*#__PURE__*/React.createElement(TilApp, null), domElement);

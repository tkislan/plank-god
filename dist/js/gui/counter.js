"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _this.handleMinusOne = function () {
      return _this.props.alterPlankTimer(-1);
    }, _this.handlePlusOne = function () {
      return _this.props.alterPlankTimer(+1);
    }, _this.handleMinusFive = function () {
      return _this.props.alterPlankTimer(-5);
    }, _this.handlePlusFive = function () {
      return _this.props.alterPlankTimer(+5);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      var plankTime = this.props.plankTime;


      return React.createElement(
        "div",
        { className: "counter" },
        React.createElement(
          "div",
          { className: "counter-controls" },
          React.createElement(
            "div",
            null,
            React.createElement(
              "button",
              {
                className: "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored",
                onClick: this.handleMinusOne
              },
              "-1"
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "button",
              {
                className: "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored",
                onClick: this.handlePlusOne
              },
              "+1"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "counter-number-container" },
          React.createElement(
            "h1",
            { className: "counter-number" },
            plankTime
          )
        ),
        React.createElement(
          "div",
          { className: "counter-controls" },
          React.createElement(
            "div",
            null,
            React.createElement(
              "button",
              {
                className: "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored",
                onClick: this.handleMinusFive
              },
              "-5"
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "button",
              {
                className: "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored",
                onClick: this.handlePlusFive
              },
              "+5"
            )
          )
        )
      );
    }
  }]);

  return Counter;
}(React.Component);
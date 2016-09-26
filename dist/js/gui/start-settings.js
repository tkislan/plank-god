"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartSettings = function (_React$Component) {
  _inherits(StartSettings, _React$Component);

  function StartSettings() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StartSettings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StartSettings.__proto__ || Object.getPrototypeOf(StartSettings)).call.apply(_ref, [this].concat(args))), _this), _this.handleMinusFive = function () {
      return _this.props.onAlterNextPlankTime(-5);
    }, _this.handleMinusOne = function () {
      return _this.props.onAlterNextPlankTime(-1);
    }, _this.handlePlusOne = function () {
      return _this.props.onAlterNextPlankTime(+1);
    }, _this.handlePlusFive = function () {
      return _this.props.onAlterNextPlankTime(+5);
    }, _this.handleStartButtonClick = function () {
      return _this.props.onStart();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StartSettings, [{
    key: "render",
    value: function render() {
      var nextPlankTime = this.props.nextPlankTime;


      return React.createElement(
        "div",
        { className: "start-settings" },
        React.createElement(Time, { time: nextPlankTime }),
        React.createElement(
          "div",
          { className: "next-plank-time-controls" },
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
        ),
        React.createElement(
          "button",
          {
            className: "start-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored",
            onClick: this.handleStartButtonClick
          },
          "Start Planking"
        )
      );
    }
  }]);

  return StartSettings;
}(React.Component);
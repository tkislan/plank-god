"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LanguageSettings = function (_React$Component) {
  _inherits(LanguageSettings, _React$Component);

  function LanguageSettings() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LanguageSettings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LanguageSettings.__proto__ || Object.getPrototypeOf(LanguageSettings)).call.apply(_ref, [this].concat(args))), _this), _this.handleSetLanguage = function (e) {
      return _this.props.onSetLanguage(e.target.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LanguageSettings, [{
    key: "render",
    value: function render() {
      var lang = this.props.lang;


      return React.createElement(
        "div",
        { className: "language-settings" },
        React.createElement(
          "label",
          { className: "mdl-radio mdl-js-radio mdl-js-ripple-effect", htmlFor: "option-en" },
          React.createElement("input", { id: "option-en", type: "radio", className: "mdl-radio__button", value: "en", checked: lang === 'en', onChange: this.handleSetLanguage }),
          React.createElement(
            "span",
            { className: "mdl-radio__label" },
            "EN"
          )
        ),
        React.createElement(
          "label",
          { className: "mdl-radio mdl-js-radio mdl-js-ripple-effect", htmlFor: "option-de" },
          React.createElement("input", { id: "option-de", type: "radio", className: "mdl-radio__button", value: "de", checked: lang === 'de', onChange: this.handleSetLanguage }),
          React.createElement(
            "span",
            { className: "mdl-radio__label" },
            "DE"
          )
        )
      );
    }
  }]);

  return LanguageSettings;
}(React.Component);
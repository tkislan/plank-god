"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlankGodComponent = function (_React$Component) {
  _inherits(PlankGodComponent, _React$Component);

  function PlankGodComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PlankGodComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlankGodComponent.__proto__ || Object.getPrototypeOf(PlankGodComponent)).call.apply(_ref, [this].concat(args))), _this), _this.handleStart = function () {
      _this.props.startPlank();

      _this.countdownTimerId = setInterval(_this.handleCountdownTick, 1000);
      soundPlayer.addSound(_this.lang.sayCountdown(5));
    }, _this.handleCountdownTick = function () {
      if (_this.props.countdown !== 0) {
        soundPlayer.addSound(_this.lang.sayCountdown(_this.props.countdown - 1));
        _this.props.decreaseCountdownTimer();
      } else {
        clearInterval(_this.countdownTimerId);

        _this.plankTimerId = setInterval(_this.handlePlankTick, 1000);
        _this.handlePlankTick();
      }
    }, _this.handlePlankTick = function () {
      if (_this.props.plankTime !== 0) {
        soundPlayer.addSound(_this.lang.sayTime(_this.props.plankTime - 1));
        _this.props.decreasePlankTimer();
      } else {
        clearInterval(_this.plankTimerId);

        console.log('Plank finished');
        _this.props.finishPlank();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PlankGodComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.countdownTimerId = null;
      this.plankTimerId = null;

      this.langs = {
        en: new LanguageEn(),
        de: new LanguageDe()
      };
      this.lang = this.langs.en;

      var loadingStartTime = new Date().getTime();
      Promise.all([this.langs.en.load(), this.langs.de.load()]).then(function () {
        console.log("All sounds loaded in " + (new Date().getTime() - loadingStartTime) + " ms");
        // setTimeout(this.props.languagesLoaded, 1000);
        _this2.props.languagesLoaded();
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.lang !== prevProps.lang) {
        this.lang = this.langs[this.props.lang];
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var loading = _props.loading;
      var lang = _props.lang;
      var running = _props.running;

      // console.log('PlankGodComponent render:', this.props);

      if (loading === true) {
        return React.createElement(
          "div",
          { className: "plank-god mdl-card mdl-shadow--2dp" },
          React.createElement("div", { className: "loading-spinner mdl-spinner mdl-js-spinner is-active" })
        );
      }

      if (running !== true) {
        var nextPlankTime = this.props.nextPlankTime;

        return React.createElement(
          "div",
          { className: "plank-god mdl-card mdl-shadow--2dp" },
          React.createElement(LanguageSettings, { lang: lang, onSetLanguage: this.props.setLanguage }),
          React.createElement(StartSettings, { nextPlankTime: nextPlankTime, onAlterNextPlankTime: this.props.alterNextPlankTime, onStart: this.handleStart })
        );
      } else {
        var _props2 = this.props;
        var countdown = _props2.countdown;
        var plankTime = _props2.plankTime;


        if (countdown > 0) {
          return React.createElement(
            "div",
            { className: "plank-god mdl-card mdl-shadow--2dp" },
            React.createElement(LanguageSettings, { lang: lang, onSetLanguage: this.props.setLanguage }),
            React.createElement(
              "h1",
              { className: "time" },
              countdown
            )
          );
        } else {
          return React.createElement(
            "div",
            { className: "plank-god mdl-card mdl-shadow--2dp" },
            React.createElement(LanguageSettings, { lang: lang, onSetLanguage: this.props.setLanguage }),
            React.createElement(Time, { time: plankTime })
          );
        }
      }
    }
  }]);

  return PlankGodComponent;
}(React.Component);

function mapStateToProps(state) {
  return {
    loading: state.loading,
    lang: state.lang,
    nextPlankTime: state.nextPlankTime,
    running: state.running,
    countdown: state.countdown,
    plankTime: state.plankTime
  };
}

function mapDispatchToProps(dispatch) {
  return Redux.bindActionCreators(actions, dispatch);
}

var PlankGod = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(PlankGodComponent);
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlankGodComponent.__proto__ || Object.getPrototypeOf(PlankGodComponent)).call.apply(_ref, [this].concat(args))), _this), _this.handleStartButtonClick = function () {
      _this.props.startPlank();

      _this.countdownTimerId = setInterval(_this.handleCountdownTick, 1000);
      soundPlayer.addSound(_this.lang.sayCountdown(10));
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

      this.langEn = new LanguageEn();
      // this.langDe = new LanguageDe();
      this.lang = this.langEn;

      var loadingStartTime = new Date().getTime();
      this.langEn.load().then(function () {
        console.log("All sounds loaded in " + (new Date().getTime() - loadingStartTime) + " ms");
        setTimeout(_this2.props.languagesLoaded, 1000);
        // this.props.languagesLoaded();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var loading = _props.loading;
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
        return React.createElement(
          "div",
          { className: "plank-god mdl-card mdl-shadow--2dp" },
          React.createElement(
            "button",
            {
              className: "start-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored",
              onClick: this.handleStartButtonClick
            },
            "Start Planking"
          )
        );
      } else {
        var _props2 = this.props;
        var countdown = _props2.countdown;
        var plankTime = _props2.plankTime;


        if (countdown > 0) {
          return React.createElement(
            "div",
            { className: "plank-god mdl-card mdl-shadow--2dp" },
            React.createElement(Countdown, { time: countdown })
          );
        } else {
          return React.createElement(
            "div",
            { className: "plank-god mdl-card mdl-shadow--2dp" },
            React.createElement(Counter, { plankTime: plankTime, alterPlankTimer: this.props.alterPlankTimer })
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
    running: state.running,
    countdown: state.countdown,
    plankTime: state.plankTime
  };
}

function mapDispatchToProps(dispatch) {
  return Redux.bindActionCreators(actions, dispatch);
}

var PlankGod = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(PlankGodComponent);
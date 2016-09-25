'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var reducer = function () {
  var initialState = {
    loading: true,
    running: false,
    countdown: 0,
    plankTime: 0
  };

  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments[1];

    switch (action.type) {
      case LANGUAGES_LOADED:
        return _extends({}, state, { loading: false });
      case START_PLANK:
        {
          if (state.running === true) {
            console.warn('Plank already running');
            return state;
          } else {
            console.log('Starting plank');

            return _extends({}, state, { running: true, countdown: 10, plankTime: action.time });
          }
        }
      case DECREASE_COUNTDOWN_TIMER:
        {
          if (state.countdown === 0) {
            console.warn('Countdown already zero');
            return state;
          }

          var newState = _extends({}, state, { countdown: state.countdown - 1 });

          return newState;
        }
      case DECREASE_PLANK_TIMER:
        return _extends({}, state, { plankTime: state.plankTime - 1 });
      case FINISH_PLANK:
        return _extends({}, state, {
          running: initialState.running,
          countdown: initialState.countdown,
          plankTime: initialState.plankTime
        });
      case ALTER_PLANK_TIMER:
        return _extends({}, state, { plankTime: Math.max(0, state.plankTime + action.time) });
      default:
        return state;
    }
    return state;
  };
}();
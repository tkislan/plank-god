'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var reducer = function () {
  var initialState = {
    loading: true,
    lang: localStorage.getItem('lang') || 'en',
    nextPlankTime: parseInt(localStorage.getItem('nextPlankTime')) || 90,
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
      case SET_LANGUAGE:
        localStorage.setItem('lang', action.lang);
        return _extends({}, state, { lang: action.lang });
      case ALTER_NEXT_PLANK_TIME:
        {
          var time = Math.max(10, state.nextPlankTime + action.time);
          localStorage.setItem('nextPlankTime', time);
          return _extends({}, state, { nextPlankTime: time });
        }
      case START_PLANK:
        {
          if (state.running === true) {
            console.warn('Plank already running');
            return state;
          } else {
            console.log('Starting plank');

            return _extends({}, state, { running: true, countdown: 5, plankTime: state.nextPlankTime });
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
      default:
        return state;
    }
    return state;
  };
}();
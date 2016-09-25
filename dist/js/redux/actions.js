'use strict';

var LANGUAGES_LOADED = 'LANGUAGES_LOADED';
var START_PLANK = 'START_PLANK';
var DECREASE_COUNTDOWN_TIMER = 'DECREASE_COUNTDOWN_TIMER';
var DECREASE_PLANK_TIMER = 'DECREASE_PLANK_TIMER';
var FINISH_PLANK = 'FINISH_PLANK';
var ALTER_PLANK_TIMER = 'ALTER_PLANK_TIMER';

var actions = {
  languagesLoaded: function languagesLoaded() {
    return { type: LANGUAGES_LOADED };
  },
  startPlank: function startPlank() {
    var time = arguments.length <= 0 || arguments[0] === undefined ? 90 : arguments[0];
    return { type: START_PLANK, time: time };
  },
  decreaseCountdownTimer: function decreaseCountdownTimer() {
    return { type: DECREASE_COUNTDOWN_TIMER };
  },
  decreasePlankTimer: function decreasePlankTimer() {
    return { type: DECREASE_PLANK_TIMER };
  },
  finishPlank: function finishPlank() {
    return { type: FINISH_PLANK };
  },
  alterPlankTimer: function alterPlankTimer(time) {
    return { type: ALTER_PLANK_TIMER, time: time };
  }
};
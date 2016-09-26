'use strict';

var LANGUAGES_LOADED = 'LANGUAGES_LOADED';
var ALTER_NEXT_PLANK_TIME = 'ALTER_NEXT_PLANK_TIME';
var START_PLANK = 'START_PLANK';
var DECREASE_COUNTDOWN_TIMER = 'DECREASE_COUNTDOWN_TIMER';
var DECREASE_PLANK_TIMER = 'DECREASE_PLANK_TIMER';
var FINISH_PLANK = 'FINISH_PLANK';

var actions = {
  languagesLoaded: function languagesLoaded() {
    return { type: LANGUAGES_LOADED };
  },
  alterNextPlankTime: function alterNextPlankTime(time) {
    return { type: ALTER_NEXT_PLANK_TIME, time: time };
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
  }
};
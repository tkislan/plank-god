const LANGUAGES_LOADED = 'LANGUAGES_LOADED';
const START_PLANK = 'START_PLANK';
const DECREASE_COUNTDOWN_TIMER = 'DECREASE_COUNTDOWN_TIMER';
const DECREASE_PLANK_TIMER = 'DECREASE_PLANK_TIMER';
const FINISH_PLANK = 'FINISH_PLANK';
const ALTER_PLANK_TIMER = 'ALTER_PLANK_TIMER';

const actions = {
  languagesLoaded: () => ({ type: LANGUAGES_LOADED }),
  startPlank: (time = 90) => ({ type: START_PLANK, time }),
  decreaseCountdownTimer: () => ({ type: DECREASE_COUNTDOWN_TIMER }),
  decreasePlankTimer: () => ({ type: DECREASE_PLANK_TIMER }),
  finishPlank: () => ({ type: FINISH_PLANK }),
  alterPlankTimer: (time) => ({ type: ALTER_PLANK_TIMER, time }),
  // startPlankCountdown: (time) => ({ type: START_PLANK, time }),
  // setCountdownTime: (time) => ({ type: SET_COUNTDOWN_TIME, time }),
  // set: () => ({ type: DECREASE_COUNTDOWN_TIMER }),
};

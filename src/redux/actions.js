const LANGUAGES_LOADED = 'LANGUAGES_LOADED';
const ALTER_NEXT_PLANK_TIME = 'ALTER_NEXT_PLANK_TIME';
const START_PLANK = 'START_PLANK';
const DECREASE_COUNTDOWN_TIMER = 'DECREASE_COUNTDOWN_TIMER';
const DECREASE_PLANK_TIMER = 'DECREASE_PLANK_TIMER';
const FINISH_PLANK = 'FINISH_PLANK';

const actions = {
  languagesLoaded: () => ({ type: LANGUAGES_LOADED }),
  alterNextPlankTime: (time) => ({ type: ALTER_NEXT_PLANK_TIME, time }),
  startPlank: (time = 90) => ({ type: START_PLANK, time }),
  decreaseCountdownTimer: () => ({ type: DECREASE_COUNTDOWN_TIMER }),
  decreasePlankTimer: () => ({ type: DECREASE_PLANK_TIMER }),
  finishPlank: () => ({ type: FINISH_PLANK }),
};

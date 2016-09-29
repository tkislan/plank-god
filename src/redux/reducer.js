const reducer = (() => {
  const initialState = {
    loading: true,
    lang: localStorage.getItem('lang') || 'en',
    nextPlankTime: parseInt(localStorage.getItem('nextPlankTime')) || 90,
    running: false,
    countdown: 0,
    plankTime: 0,
  };

  return (state = initialState, action) => {
    switch (action.type) {
      case LANGUAGES_LOADED:
        return { ...state, loading: false };
      case SET_LANGUAGE:
        localStorage.setItem('lang', action.lang);
        return { ...state, lang: action.lang };
      case ALTER_NEXT_PLANK_TIME: {
        const time = Math.max(10, state.nextPlankTime + action.time);
        localStorage.setItem('nextPlankTime', time);
        return { ...state, nextPlankTime: time };
      }
      case START_PLANK: {
        if (state.running === true) {
          console.warn('Plank already running');
          return state;
        } else {
          console.log('Starting plank');

          return { ...state, running: true, countdown: 5, plankTime: state.nextPlankTime };
        }
      }
      case DECREASE_COUNTDOWN_TIMER: {
        if (state.countdown === 0) {
          console.warn('Countdown already zero');
          return state;
        }

        const newState = { ...state, countdown: state.countdown - 1 };

        return newState;
      }
      case DECREASE_PLANK_TIMER:
        return { ...state, plankTime: state.plankTime - 1 };
      case FINISH_PLANK:
        return {
          ...state,
          running: initialState.running,
          countdown: initialState.countdown,
          plankTime: initialState.plankTime
        };
      default:
        return state;
    }
    return state;
  }
})();

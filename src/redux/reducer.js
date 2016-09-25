const reducer = (() => {
  const initialState = {
    loading: true,
    running: false,
    countdown: 0,
    plankTime: 0,
  };

  return (state = initialState, action) => {
    switch (action.type) {
      case LANGUAGES_LOADED:
        return { ...state, loading: false };
      case START_PLANK: {
        if (state.running === true) {
          console.warn('Plank already running');
          return state;
        } else {
          console.log('Starting plank');

          return { ...state, running: true, countdown: 10, plankTime: action.time };
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
      case ALTER_PLANK_TIMER:
        return { ...state, plankTime: Math.max(0, state.plankTime + action.time) };
      default:
        return state;
    }
    return state;
  }
})();

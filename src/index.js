let currentLanguage = null;

const store = Redux.createStore(reducer);

// const plankService = new PlankService(store.dispatch);

const soundPlayer = new SoundPlayer();

const countdownFiles = [
  '10cnt',
  '9cnt',
  '8cnt',
  '7cnt',
  '6cnt',
  '5cnt',
  '4cnt',
  '3cnt',
  '2cnt',
  '1cnt',
];

const files = [
  ...countdownFiles,
  'go',
  1,
  2,
  3,
  4,
  5,
  10,
  15,
  20,
  30,
  40,
  50,
  'minute',
  'minutes',
  'seconds',
  'start',
  'finish',
];

const loadedPromises = [];
const loadingStartTime = new Date().getTime();

const sounds = files.reduce((prev, num) => {
  const sound = new Audio(`data/languages/en/${num}.wav`);

  const loadedPromise = new Promise((resolve) => {
    sound.oncanplaythrough = () => resolve();
  });

  return { ...prev, [num]: sound };
}, {});

function startCountdown(cb) {
  const t = {};
  let count = 5;

  t.timerId = setInterval(() => {
    if (count > 0) {
      soundPlayer.addSound(sounds[`${count}cnt`]);
      count--;
    } else {
      soundPlayer.addSound(sounds.go);
      clearInterval(t.timerId);

      if (cb) cb();
    }
  }, 1000);
}

function startPlankTimer(cb) {
  const t = {};
  let count = 90;
  // count = 15;

  const startTime = new Date().getTime();

  t.timerId = setInterval(() => {
    count--;

    if (count > 0) {
      if (count > 10) {
        if (count % 5 === 0) {
          const minutes = Math.floor(count / 60);
          const seconds = Math.floor(count % 60);

          if (minutes > 0) {
            soundPlayer.addSound([sounds[minutes], minutes === 1 ? sounds.minute : sounds.minutes]);
          }

          if (seconds > 0) {
            if (seconds < 19) {
              soundPlayer.addSound(sounds[seconds]);
            } else {
              const mulTen = Math.floor(seconds / 10) * 10;
              soundPlayer.addSound(sounds[mulTen]);
              const restSec = Math.floor((seconds % 10));
              if (restSec > 0) {
                soundPlayer.addSound(sounds[restSec]);
              }
            }
            soundPlayer.addSound(sounds.seconds);
          }
        }
      } else {
        soundPlayer.addSound(sounds[`${count}cnt`]);
      }
    } else {
      clearInterval(t.timerId);
      soundPlayer.addSound(sounds.finish);

      console.log(`Plank took ${(new Date().getTime() - startTime) / 1000} seconds`);

      if (cb) cb();
    }
  }, 1000);
}

Promise.all(loadedPromises).then(() => {
  // console.log(`All sounds loaded in ${new Date().getTime() - loadingStartTime} ms`);
  // console.log(sounds);
  // startCountdown(startPlankTimer);
  // startPlankTimer();
  // soundPlayer.addSound([sounds[50], sounds.seconds]);
  // soundPlayer.addSound([...countdownFiles.slice(5).map((file) => sounds[file]), sounds.go]);
});


// console.log(React);

// ReactDOM.render(
//   <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
//     <i className="material-icons">add</i>
//   </button>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <PlankGod />
  </ReactRedux.Provider>,
  document.getElementById('root')
);

// setTimeout(() => {
//   console.log(sounds);
//   soundPlayer.addSound([sounds[50], sounds.seconds]);
// }, 1000);


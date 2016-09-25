'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var currentLanguage = null;

var store = Redux.createStore(reducer);

// const plankService = new PlankService(store.dispatch);

var soundPlayer = new SoundPlayer();

var countdownFiles = ['10cnt', '9cnt', '8cnt', '7cnt', '6cnt', '5cnt', '4cnt', '3cnt', '2cnt', '1cnt'];

var files = [].concat(countdownFiles, ['go', 1, 2, 3, 4, 5, 10, 15, 20, 30, 40, 50, 'minute', 'minutes', 'seconds', 'start', 'finish']);

var loadedPromises = [];
var loadingStartTime = new Date().getTime();

var sounds = files.reduce(function (prev, num) {
  var sound = new Audio('data/languages/en/' + num + '.wav');

  var loadedPromise = new Promise(function (resolve) {
    sound.oncanplaythrough = function () {
      return resolve();
    };
  });

  return _extends({}, prev, _defineProperty({}, num, sound));
}, {});

function startCountdown(cb) {
  var t = {};
  var count = 5;

  t.timerId = setInterval(function () {
    if (count > 0) {
      soundPlayer.addSound(sounds[count + 'cnt']);
      count--;
    } else {
      soundPlayer.addSound(sounds.go);
      clearInterval(t.timerId);

      if (cb) cb();
    }
  }, 1000);
}

function startPlankTimer(cb) {
  var t = {};
  var count = 90;
  // count = 15;

  var startTime = new Date().getTime();

  t.timerId = setInterval(function () {
    count--;

    if (count > 0) {
      if (count > 10) {
        if (count % 5 === 0) {
          var minutes = Math.floor(count / 60);
          var seconds = Math.floor(count % 60);

          if (minutes > 0) {
            soundPlayer.addSound([sounds[minutes], minutes === 1 ? sounds.minute : sounds.minutes]);
          }

          if (seconds > 0) {
            if (seconds < 19) {
              soundPlayer.addSound(sounds[seconds]);
            } else {
              var mulTen = Math.floor(seconds / 10) * 10;
              soundPlayer.addSound(sounds[mulTen]);
              var restSec = Math.floor(seconds % 10);
              if (restSec > 0) {
                soundPlayer.addSound(sounds[restSec]);
              }
            }
            soundPlayer.addSound(sounds.seconds);
          }
        }
      } else {
        soundPlayer.addSound(sounds[count + 'cnt']);
      }
    } else {
      clearInterval(t.timerId);
      soundPlayer.addSound(sounds.finish);

      console.log('Plank took ' + (new Date().getTime() - startTime) / 1000 + ' seconds');

      if (cb) cb();
    }
  }, 1000);
}

Promise.all(loadedPromises).then(function () {
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

ReactDOM.render(React.createElement(
  ReactRedux.Provider,
  { store: store },
  React.createElement(PlankGod, null)
), document.getElementById('root'));

// setTimeout(() => {
//   console.log(sounds);
//   soundPlayer.addSound([sounds[50], sounds.seconds]);
// }, 1000);
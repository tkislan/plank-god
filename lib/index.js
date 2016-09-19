'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('Plank God');

var SoundPlayer = function SoundPlayer() {
  var _this = this;

  _classCallCheck(this, SoundPlayer);

  this.startLoop = function () {
    if (_this.soundQueue.length === 0 || _this.playing === true) return;

    _this.timerId = setInterval(function () {
      var sound = _this.soundQueue.shift();

      if (!sound) {
        _this.stopLoop();
        return;
      }

      _this.stopLoop();
      _this.playing = true;
      sound.play();

      sound.onended = function () {
        sound.onended = null;
        _this.playing = false;
        _this.startLoop();
      };
    }, 50);
  };

  this.stopLoop = function () {
    clearInterval(_this.timerId);
    _this.timerId = null;
  };

  this.addSound = function (sound) {
    if (Array.isArray(sound)) _this.soundQueue = [].concat(_toConsumableArray(_this.soundQueue), _toConsumableArray(sound));else _this.soundQueue = [].concat(_toConsumableArray(_this.soundQueue), [sound]);

    if (!_this.timerId) _this.startLoop();
  };

  this.soundQueue = [];
  this.playing = false;

  this.startLoop();
};

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
  console.log('All sounds loaded in ' + (new Date().getTime() - loadingStartTime) + ' ms');
  console.log(sounds);
  startCountdown(startPlankTimer);
  // startPlankTimer();
  // soundPlayer.addSound([sounds[50], sounds.seconds]);
  // soundPlayer.addSound([...countdownFiles.slice(5).map((file) => sounds[file]), sounds.go]);
});

// setTimeout(() => {
//   console.log(sounds);
//   soundPlayer.addSound([sounds[50], sounds.seconds]);
// }, 1000);
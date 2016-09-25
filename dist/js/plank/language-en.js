'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LanguageEn = function LanguageEn() {
  var _this = this;

  _classCallCheck(this, LanguageEn);

  this.load = function () {
    var loadedPromises = [];

    _this.sounds = files.reduce(function (prev, num) {
      var sound = new Audio('data/languages/en/' + num + '.wav');

      var loadedPromise = new Promise(function (resolve) {
        sound.oncanplaythrough = function () {
          return resolve();
        };
      });

      loadedPromises.push(loadedPromise);

      return _extends({}, prev, _defineProperty({}, num, sound));
    }, {});

    return Promise.all(loadedPromises);
  };

  this.sayCountdown = function (time) {
    if (time > 0) return _this.sounds[time + 'cnt'];else return _this.sounds.go;
  };

  this.sayTime = function (time) {
    var sounds = [];

    if (time > 0) {
      if (time > 10) {
        if (time % 5 === 0) {
          var minutes = Math.floor(time / 60);
          var seconds = Math.floor(time % 60);

          if (minutes > 0) {
            sounds = [].concat(_toConsumableArray(sounds), [_this.sounds[minutes], minutes === 1 ? _this.sounds.minute : _this.sounds.minutes]);
          }

          if (seconds > 0) {
            if (seconds < 19) {
              sounds = [].concat(_toConsumableArray(sounds), [_this.sounds[seconds]]);
            } else {
              var mulTen = Math.floor(seconds / 10) * 10;
              sounds = [].concat(_toConsumableArray(sounds), [_this.sounds[mulTen]]);
              var restSec = Math.floor(seconds % 10);
              if (restSec > 0) {
                sounds = [].concat(_toConsumableArray(sounds), [_this.sounds[restSec]]);
              }
            }
            sounds = [].concat(_toConsumableArray(sounds), [_this.sounds.seconds]);
          }
        }
      } else {
        sounds = [].concat(_toConsumableArray(sounds), [_this.sounds[time + 'cnt']]);
      }
    } else {
      sounds = [].concat(_toConsumableArray(sounds), [_this.sounds.finish]);
    }

    return sounds;
  };

  this.countdownFiles = ['10cnt', '9cnt', '8cnt', '7cnt', '6cnt', '5cnt', '4cnt', '3cnt', '2cnt', '1cnt'];

  this.files = [].concat(_toConsumableArray(this.countdownFiles), ['go', 1, 2, 3, 4, 5, 10, 15, 20, 30, 40, 50, 'minute', 'minutes', 'seconds', 'start', 'finish']);
};
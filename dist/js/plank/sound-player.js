"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
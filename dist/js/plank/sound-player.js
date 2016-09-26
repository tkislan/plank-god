"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SoundPlayer = function SoundPlayer() {
  var _this = this;

  _classCallCheck(this, SoundPlayer);

  this.playSound = function () {
    if (_this.playing === true || _this.soundQueue.length === 0) return;

    var sound = _this.soundQueue.shift();

    if (!sound) return;

    _this.playing = true;

    sound.play();
    sound.onended = function () {
      _this.playing = false;
      _this.playSound();
    };
  };

  this.addSound = function (sound) {
    if (Array.isArray(sound)) _this.soundQueue = [].concat(_toConsumableArray(_this.soundQueue), _toConsumableArray(sound));else _this.soundQueue = [].concat(_toConsumableArray(_this.soundQueue), [sound]);

    _this.playSound();
  };

  this.soundQueue = [];
  this.playing = false;
};
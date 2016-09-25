class LanguageEn {
  constructor() {
    this.countdownFiles = [
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

    this.files = [
      ...this.countdownFiles,
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
  }

  load = () => {
    const loadedPromises = [];

    this.sounds = files.reduce((prev, num) => {
      const sound = new Audio(`data/languages/en/${num}.wav`);

      const loadedPromise = new Promise((resolve) => {
        sound.oncanplaythrough = () => resolve();
      });

      loadedPromises.push(loadedPromise);

      return { ...prev, [num]: sound };
    }, {});

    return Promise.all(loadedPromises);
  };

  sayCountdown = (time) => {
    if (time > 0) return this.sounds[`${time}cnt`];
    else return this.sounds.go;
  };

  sayTime = (time) => {
    let sounds = [];

    if (time > 0) {
      if (time > 10) {
        if (time % 5 === 0) {
          const minutes = Math.floor(time / 60);
          const seconds = Math.floor(time % 60);

          if (minutes > 0) {
            sounds = [...sounds, this.sounds[minutes], minutes === 1 ? this.sounds.minute : this.sounds.minutes];
          }

          if (seconds > 0) {
            if (seconds < 19) {
              sounds = [...sounds, this.sounds[seconds]];
            } else {
              const mulTen = Math.floor(seconds / 10) * 10;
              sounds = [...sounds, this.sounds[mulTen]];
              const restSec = Math.floor((seconds % 10));
              if (restSec > 0) {
                sounds = [...sounds, this.sounds[restSec]];
              }
            }
            sounds = [...sounds, this.sounds.seconds];
          }
        }
      } else {
        sounds = [...sounds, this.sounds[`${time}cnt`]];
      }
    } else {
      sounds = [...sounds, this.sounds.finish];
    }

    return sounds;
  };
}

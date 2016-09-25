class SoundPlayer {
  constructor() {
    this.soundQueue = [];
    this.playing = false;

    this.startLoop();
  }

  startLoop = () => {
    if (this.soundQueue.length === 0 || this.playing === true) return;

    this.timerId = setInterval(() => {
      const sound = this.soundQueue.shift();

      if (!sound) {
        this.stopLoop();
        return;
      }

      this.stopLoop();
      this.playing = true;
      sound.play();

      sound.onended = () => {
        sound.onended = null;
        this.playing = false;
        this.startLoop();
      };
    }, 50);
  };

  stopLoop = () => {
    clearInterval(this.timerId);
    this.timerId = null;
  };

  addSound = (sound) => {
    if (Array.isArray(sound)) this.soundQueue = [...this.soundQueue, ...sound];
    else this.soundQueue = [...this.soundQueue, sound];

    if (!this.timerId) this.startLoop();
  };
}

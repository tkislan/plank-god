class SoundPlayer {
  constructor() {
    this.soundQueue = [];
    this.playing = false;
  }

  playSound = () => {
    if (this.playing === true || this.soundQueue.length === 0) return;

    const sound = this.soundQueue.shift();

    if (!sound) return;

    this.playing = true;

    sound.play();
    sound.onended = () => {
      this.playing = false;
      this.playSound();
    };
  };

  addSound = (sound) => {
    if (Array.isArray(sound)) this.soundQueue = [...this.soundQueue, ...sound];
    else this.soundQueue = [...this.soundQueue, sound];

    this.playSound();
  };
}

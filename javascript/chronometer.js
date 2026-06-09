class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  getMiliseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let miliSeconds = this.computeTwoDigitNumber(this.getMiliseconds());

    return `${minutes}:${seconds}:${miliSeconds};`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

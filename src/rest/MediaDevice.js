import Emitter from './Emitter';

class MediaDevice extends Emitter {
  start() {
    const constraints = {
      video: {
        facingMode: 'user',
        height: { min: 360, ideal: 720, max: 1080 }
      },
      audio: true
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        this.stream = stream;
        this.emit('stream', stream);
      })
      .catch(err => {
        if (err instanceof DOMException) {
          alert('Cannot open webcam and/or microphone');
        } else {
          console.log(err);
        }
      });

    return this;
  }

  toggle(type, on) {
    const len = arguments.length;
    if (this.stream) {
      this.stream[`get${type}Tracks`]().forEach(track => {
        const state = len === 2 ? on : !track.enabled;
        track.enabled = state;
      });
    }
    return this;
  }

  stop() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
    return this;
  }
}

export default MediaDevice;

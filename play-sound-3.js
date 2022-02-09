'use strict';

//this component will basically just toggle off/on the spinning of the walls

//code from:
    //https://jsfiddle.net/fq2pqwfx/2/
        //same as play-sound
AFRAME.registerComponent('play-sound-3', {
    init: function() {
        let playing = false;
        let audio = document.querySelector("#emotion_song");
        this.el.addEventListener('click', () => {
          if (!playing) {
            audio.play();
          } else {
            audio.pause();
            audio.currentTime = 0;
          }
          playing = !playing;
        });
      }
});
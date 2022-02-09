'use strict';

//this component will basically just toggle off/on the spinning of the walls

//code from:
    //https://jsfiddle.net/fq2pqwfx/2/
AFRAME.registerComponent('play-sound', {
    init: function() {
        let playing = false;    //start false so song doesn't start at the beginning
        let audio = document.querySelector("#angst_song");  //assign song
        this.el.addEventListener('click', () => {   //once event 'click' happens
          if (!playing) {   //if it isn't playing. . .
            audio.play();   //play
          } else {
            audio.pause();  //otherwise pause and reset
            audio.currentTime = 0;
          }
          playing = !playing;   
        });
      }
});
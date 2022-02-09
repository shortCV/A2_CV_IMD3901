'use strict';

//this component will turn lights or off
AFRAME.registerComponent('lights-on', {
    schema: {
        duration: {type: 'number', default:20000.0},  //duration is in milliseconds
      },

  init: function() {
    
    //get a local reference to our entities and set some property variables
    const Context_AF = this;
    Context_AF.lights      = document.querySelector('#light_scene_1');
    Context_AF.lights.setAttribute("visible",false, {dur:Context_AF.data.duration, enabled:false}); //lights are off
    Context_AF.isOn = false;
    

    Context_AF.el.addEventListener('click', function() {  //turn off lights
      if (Context_AF.isOn === true) {
        console.log('turn off');
        Context_AF.lights.setAttribute("visible", false, {enabled:false});
        Context_AF.isOn = false;
      }   
      else {                                              //turn on lights
        console.log('turn on');
        Context_AF.lights.setAttribute("visible", true, {enabled:true});
        Context_AF.isOn = true;
      }
    });
  },
});
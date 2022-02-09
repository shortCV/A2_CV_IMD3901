'use strict';

//this component will basically just toggle off/on the spinning of the walls
AFRAME.registerComponent('lights-on-3', {
    schema: {
        duration: {type: 'number', default:20000.0},  //duration is in milliseconds
      },

  init: function() {
    
    //get a local reference to our entities and set some property variables
    const Context_AF = this;
    Context_AF.lights      = document.querySelector('#light_scene_3');
    Context_AF.lights.setAttribute("visible",false, {dur:Context_AF.data.duration, enabled:false});
    Context_AF.isOn = false;
    

    Context_AF.el.addEventListener('click', function() {
      if (Context_AF.isOn === true) {
        console.log('turn off');
        Context_AF.lights.setAttribute("visible", false, {enabled:false});
        Context_AF.isOn = false;
      }
      else {
        console.log('turn on');
        Context_AF.lights.setAttribute("visible", true, {enabled:true});
        Context_AF.isOn = true;
      }
    });
  },
});
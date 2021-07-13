

// ADD PX TO INPUT NUMBER
// Author: Quyen
var slider1 = document.getElementById('slider1');

var selectValue1 = document.querySelector('.selectValue1');
selectValue1.innerHTML = slider1.value;
slider1.oninput = function () {
    selectValue1.innerHTML =  `${this.value}px`;
    draw_width = this.value;
}

// fix input range for shadow blur
// author: Quyen
var slider2 = document.getElementById('slider2');
const selectValue2 = document.querySelector('.selectValue2');
selectValue2.innerHTML = slider2.value;
slider2.oninput = function () {
    selectValue2.innerHTML =  this.value;
    shadow_blur = this.value;
  
}
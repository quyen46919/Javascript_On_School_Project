// Phần code của Tài
// range size
var slider1 = document.getElementById('slider1');

var selectValue1 = document.querySelector('.selectValue1');
selectValue1.innerHTML = slider1.value;
slider1.oninput = function () {
    selectValue1.innerHTML = this.value;
    draw_width = this.value;
};

//code cho range opacity
var slider2 = document.getElementById('slider2');

var selectValue2 = document.querySelector('.selectValue2');
slider2.setAttribute('value', 1);
selectValue2.innerHTML = slider2.value;
slider2.oninput = function () {
    selectValue2.innerHTML = +this.value / 1000;
    opacityValue = this.value / 1000;
};

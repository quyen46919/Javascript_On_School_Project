// GET DOM
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const canvas = $('#canvas');
const clear_btn = $('#clear');
const undo_btn = $('#undo');

// VARIABLES
var start_background_color = 'white';
var draw_color = 'rgb(125,125,152)';
var shadow_blur = 10;
let is_drawing = false;
var restore_array = [];
var index = -1;
var isCheckBtn = false;
var draw_width = 5;
var opacityValue = 1;

// FIX CANVAS RESPONSIVE DEPEND ON WINDOW INNERHEIGHT
// Author: Quyen
// Set default width and height of canvas

canvas.width = 1024;
canvas.height = 550;

var context = canvas.getContext('2d');
context.fillStyle = start_background_color;
context.fillRect(0, 0, canvas.width, canvas.height);

const mouse = {
    x: 0, y: 0,                 
    lastX: 0, lastY: 0,                
}
function mouseEvent(event) {
    var bounds = canvas.getBoundingClientRect();
    //get the mouse coordinates, subtract the canvas top left and any scrolling
    mouse.x = event.pageX - bounds.left - scrollX;
    mouse.y = event.pageY - bounds.top - scrollY;

    mouse.x /= bounds.width; 
    mouse.y /= bounds.height; 

    //then scale to canvas coordinates by multiplying the normalized coords with the canvas resolution
    mouse.x *= canvas.width;
    mouse.y *= canvas.height;
}

// UNDO AND CLEAR FUNCTION
function clearCanvas() {
    context.fillStyle = start_background_color;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);

    restore_array = [];
    index = -1;
}
function undo() {
    if (index <= 0) {
        clearCanvas();
    } else {
        index -= 1;
        restore_array.pop();
        context.putImageData(restore_array[index], 0, 0);
    }
}

function CtrlZ(e) {
    var evtobj = window.event? e : e
    if (evtobj.keyCode == 90 && evtobj.ctrlKey) undo();

    if (evtobj.keyCode == 46 && evtobj.ctrlKey) clearCanvas();
}

document.onkeydown = CtrlZ;
clear_btn.addEventListener('click', clearCanvas);
undo_btn.addEventListener('click', undo);
// funtions

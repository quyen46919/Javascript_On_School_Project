// GET DOM
const canvas = document.querySelector('#canvas');
const clear_btn = document.querySelector('#clear');
const undo_btn = document.querySelector('#undo');
const board_paint = document.querySelector('.board-paint');

// VARIABLES
var start_background_color = 'white';
var draw_color = 'red';
let is_drawing = false;
var restore_array = [];
var index = -1;
var isCheckBtn = false;
var draw_width = 10;

// MAKE CANVAS
canvas.width = 1100;
canvas.height = 550;

var context = canvas.getContext('2d');
context.fillStyle = start_background_color;
context.fillRect(0, 0, canvas.width, canvas.height);

// UNDO AND CLEAR
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
clear_btn.addEventListener('click', clearCanvas);
undo_btn.addEventListener('click', undo);
// funtions

function setBgBoardPaint(imgUrl) {
    if (imgUrl === '') {
        isCheckBtn = false;
        board_paint.style.backgroundImage = `url(${imgUrl})`;
    } else {
        isCheckBtn = true;
        board_paint.style.backgroundImage = `url(${imgUrl})`;
    }
    changeBgCanvas(imgUrl);
    handleBtnPaintDefault();
}
function handleImageOnCanvas(img) {
    setBgBoardPaint(img);
    if (img != '') {
        toggle();
    }
}

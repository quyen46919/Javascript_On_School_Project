// GET DOM
const canvas = document.querySelector('#canvas');
const clear_btn = document.querySelector('#clear');
const undo_btn = document.querySelector('#undo');
const board_paint = document.querySelector('.board-paint');

// VARIABLES
let draw_color = 'black';
let draw_width = '10';
let bd_btn = '';
let is_drawing = false;
let start_background_color = 'white';
let restore_array = [];
let index = -1;
let isCheckBtn = false;

// MAKE CANVAS
canvas.width = window.innerWidth;
canvas.height = 700;

let context = canvas.getContext('2d');
context.fillStyle = start_background_color;
context.fillRect(0, 0, canvas.width, canvas.height);

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
function start(e) {
    is_drawing = true;
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    e.preventDefault();
}
function draw(e) {
    if (is_drawing) {
        context.lineTo(
            e.clientX - canvas.offsetLeft,
            e.clientY - canvas.offsetTop,
        );
        context.strokeStyle = draw_color;
        context.lineWidth = draw_width;
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.stroke();
    }
    e.preventDefault();
}
function stop(e) {
    if (is_drawing) {
        context.stroke();
        context.closePath();
        is_drawing = false;
    }
    e.preventDefault();
    if (e.type != 'mouseout') {
        restore_array.push(
            context.getImageData(0, 0, canvas.width, canvas.height),
        );
        index += 1;
    }
}
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

function handleImageOnCanvas(img) {
    setBgBoardPaint(img);
    if (img != '') {
        toggle();
    }
}

// add event to call functions
canvas.addEventListener('touchstart', start, false);
canvas.addEventListener('touchmove', draw, false);
canvas.addEventListener('mousedown', start, false);
canvas.addEventListener('mousemove', draw, false);

canvas.addEventListener('touchend', stop, false);
canvas.addEventListener('mouseup', stop, false);
canvas.addEventListener('mouseout', stop, false);

clear_btn.addEventListener('click', clearCanvas);
undo_btn.addEventListener('click', undo);

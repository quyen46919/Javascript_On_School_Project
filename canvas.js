// GET DOM
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const canvas = $('#canvas');
const clear_btn = $('#clear');
const undo_btn = $('#undo');
const board_paint = $('.board-paint');
const blur = $('#blur');
const popup = $('#popup');
const btn_paintDf = $('#default');
const iconCanvas = $('#icon-canvas');
const iconCheck = $$('.fa-check');
const txtEle = $$('.txt');
const slideEle = $$('.slide');
const checkedIcon = $('#checked');
const paint__img = $('.paint__img');
const displayImg = $('#displayImg');
const plusIcon = $('.fa-plus');
const popup__upload = $('.popup__upload');

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
clear_btn.addEventListener('click', clearCanvas);
undo_btn.addEventListener('click', undo);
// funtions

function handleImageOnCanvas(i, img) {
    handleSetCheckedImg(i, slideEle);
    dispatchImg(img);
}
function dispatchImg(imgUrl) {
    console.log(isCheckBtn);
    checkedIcon.onclick = function (e) {
        if (isCheckBtn) {
            console.log(isCheckBtn);
            isCheckBtn = true;
            getImgBg(isCheckBtn);
            setBgBoardPaint(imgUrl);
            toggle();
        } else {
            alert('Bạn Cần Chọn 1 Ảnh Mẫu Để Vẽ 🤗');
            e.preventDefault();
        }
    };
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

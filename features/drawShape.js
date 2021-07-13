// get DOM
const table_geometry = $('.paint__table-geometry');
const btn_table = $('.paint__btn-table');

const btn_line = $('.btn__horizontal-rule');
const btn_square = $('.btn__square');
const btn_rectangle = $('.btn__rectangle');
const btn_circle = $('.btn__circle');
const btn_triangle = $('.btn__triangle');
const btn_hexagon = $('.btn__hexagon');
const btn_star = $('.btn__star');

const btn_fillBox = $('#fillBox');
const btn_angle = $('#polygonAngle');
const radiusDeg = $('input#polygonAngle');
const polygonSides = $('input#polygonSides');
//end DOM

//Validate
let startPos = {
    x: 0,
    y: 0,
};
let oldImage = null;
// console.log(polygonAngleVal);

context.fillStyle = start_background_color;
// end Validation

// Lấy deg người dùng nhập vào
var deg = 0;
var polygonSideValue = 6;
radiusDeg.addEventListener('keyup', (e) => {
    deg = +e.target.value;
});
polygonSides.addEventListener('keyup', (e) => {
    polygonSideValue = +e.target.value;
});

// function
// bặt tắt show bảng tuỳ chọn
function toggleTableGeometry() {
    table_geometry.classList.toggle('active');
    table_img.classList.remove('active');
    img_canvas.classList.remove('active');
    removeTableGeometry();
}
//lấy vị trí bắt đầu click
function getMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left + 5,
        y: evt.clientY - rect.top + 10,
    };
}
// gán vị trí bắt đầu cho startPos
function paintStart(e) {
    startPos = getMousePos(e);
    start(e);
}
// bắt đầu vẽ
function start(e) {
    is_drawing = true;
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    e.preventDefault();
    saveState();
}

// khi ko viết nữa thì hàm này sẽ chạy
function stopDrawShape(e) {
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

// tạo hoạt ảnh img và lưu lại
function saveState() {
    oldImage = new Image();
    oldImage.src = canvas.toDataURL('image/jpeg', 1.0);
}

// lấy hoạt ảnh đầu cuối cùng
function undoClick() {
    context.drawImage(oldImage, 0, 0, canvas.width, canvas.height);
}
// lấy dữ liệU checkbox fill
function fillValueCheck() {
    if (btn_fillBox.checked) {
        context.fill();
        context.fillStyle = draw_color;
    }
}
// lấy đường thẳng
function ChangeLine() {
    canvas.onmousemove = function (e) {
        context.lineWidth = draw_width;
        if (is_drawing) {
            drawLine(e, startPos);
        }
        e.preventDefault();
    };
    canvas.style.cursor = 'default';
}
//lấy hình chữ nhật
function changeRectangle() {
    canvas.onmousemove = function (e) {
        if (is_drawing) {
            drawRectangle(e, startPos);
        }
        e.preventDefault();
    };
    canvas.style.cursor = 'crosshair';
}
//lấy hình tròn
function ChangeCircle() {
    canvas.onmousemove = function (e) {
        if (is_drawing) {
            drawCircle(e, startPos);
        }
        e.preventDefault();
    };
    canvas.style.cursor = 'crosshair';
}
// lấy hình Tam giác
function ChangeTriangle() {
    canvas.onmousemove = function (e) {
        if (is_drawing) {
            drawPolygon(e, startPos, 3, (deg - 30) * (Math.PI / 180));
        }
        e.preventDefault();
    };
    canvas.style.cursor = 'crosshair';
}

// lấy hình vuông
function ChangeSquare() {
    canvas.onmousemove = function (e) {
        if (is_drawing) {
            drawSquare(e, startPos);
        }
        e.preventDefault();
    };
    canvas.style.cursor = 'crosshair';
}

// lấy hình đa giác
function ChangeHexagon() {
    canvas.onmousemove = function (e) {
        if (is_drawing) {
            drawPolygon(e, startPos, polygonSideValue, deg * (Math.PI / 180));
        }
        e.preventDefault();
    };
    canvas.style.cursor = 'crosshair';
}

// xoá table tại body
function removeTableGeometry() {
    window.onclick = (e) => {
        if (
            !e.target.closest('.paint__table-geometry') &&
            !e.target.closest('.paint__btn-table')
        ) {
            table_geometry.classList.remove('active');
        }
    };
}
// vẽ đường thẳng
function drawLine(e, startPos) {
    undoClick();
    if (is_drawing) {
        context.strokeStyle = draw_color;
        context.lineWidth = draw_width;
        context.beginPath();
        context.moveTo(startPos.x, startPos.y);
        context.lineTo(
            e.clientX - canvas.offsetLeft,
            e.clientY - canvas.offsetTop,
        );
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.stroke();
    }
    e.preventDefault();
}

//vẽ hình chữ nhật
function drawRectangle(e, startPos) {
    undoClick();
    mouseEvent(e);
    context.strokeStyle = draw_color;
    context.lineWidth = draw_width;
    fillValueCheck();
    context.beginPath();
    context.rect(startPos.x, startPos.y, mouse.x, mouse.y);
    context.stroke();
    e.preventDefault();
}

// FIX DRAW SQUARE
// Author: Quyen
function drawSquare(e, startPos) {
    undoClick();
    mouseEvent(e);
    context.strokeStyle = draw_color;
    context.lineWidth = draw_width;
    fillValueCheck();
    context.beginPath();
    context.rect(startPos.x, startPos.y, mouse.x, mouse.x);
    context.stroke();
    e.preventDefault();
}

//vẽ hình tròn
function drawCircle(e, startPos, x, y) {
    undoClick();
    context.strokeStyle = draw_color;
    context.lineWidth = draw_width;
    endPosX = e.clientX - canvas.offsetLeft;
    fillValueCheck();
    let rect = endPosX - startPos.x;
    if (rect < 0) {
        rect = startPos.x - endPosX;
    }
    if (rect > 0) {
        context.save();
        context.beginPath();
        context.scale(x, y);
        context.arc(startPos.x, startPos.y, rect, 0, rect * Math.PI);
        context.stroke();
        context.restore();
    }
}

// vẽ hình tam giác + đa giác
function drawPolygon(e, startPos, sides, angle) {
    undoClick();
    endPosX = e.clientX - canvas.offsetLeft;
    endPosY = e.clientY - canvas.offsetTop;
    context.strokeStyle = draw_color;
    context.lineWidth = draw_width;
    fillValueCheck();
    var coordinates = [],
        radius = Math.sqrt(
            Math.pow(startPos.x - endPosX, 2) +
                Math.pow(startPos.y - endPosY, 2),
        ),
        index = 0;
    context.beginPath();
    for (index = 0; index < sides; index++) {
        coordinates.push({
            x: startPos.x + radius * Math.cos(angle),
            y: startPos.y - radius * Math.sin(angle),
        });
        angle += (2 * Math.PI) / sides;
    }

    context.beginPath();
    context.moveTo(coordinates[0].x, coordinates[0].y);
    for (index = 1; index < sides; index++) {
        context.lineTo(coordinates[index].x, coordinates[index].y);
    }

    context.closePath();
    context.stroke();
}
// end Validation

// event listener
btn_table.addEventListener('click', toggleTableGeometry);

canvas.addEventListener('touchstart', paintStart, false);
canvas.addEventListener('mousedown', paintStart, false);

canvas.addEventListener('touchend', stopDrawShape, false);
canvas.addEventListener('mouseout', stopDrawShape, false);

btn_line.addEventListener('click', ChangeLine);
btn_square.addEventListener('click', ChangeSquare);
btn_rectangle.addEventListener('click', changeRectangle);
btn_circle.addEventListener('click', ChangeCircle);
btn_triangle.addEventListener('click', ChangeTriangle);
btn_hexagon.addEventListener('click', ChangeHexagon);
// end listener

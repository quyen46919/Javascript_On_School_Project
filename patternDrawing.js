// Phần này của Long
const blur = document.getElementById('blur');
const popup = document.getElementById('popup');
const btn_paintDf = document.getElementById('default');
const iconCanvas = document.getElementById('icon-canvas');

function changeBgCanvas(imgUrl) {
    console.log(isCheckBtn);

    if (isCheckBtn) {
        iconCanvas.style.display = 'block';
        iconCanvas.onmousedown = function () {
            board_paint.style.backgroundImage = ``;
        };
        iconCanvas.onmouseup = function () {
            board_paint.style.backgroundImage = `url(${imgUrl})`;
        };
    } else {
        iconCanvas.style.display = 'none';
    }
}
function toggle() {
    blur.classList.toggle('active');
    popup.classList.toggle('active');
}

function handleBtnPaintDefault() {
    if (isCheckBtn) {
        btn_paintDf.innerText = 'Vẽ Mặc Định';
        btn_paintDf.setAttribute('class', 'btn-default');
        isCheckBtn = false;
        btn_paintDf.onclick = function () {
            handleImageOnCanvas('');
            btn_paintDf.innerText = 'Vẽ Theo Mẫu';
            btn_paintDf.setAttribute('class', '');
            clearCanvas();
        };
    } else {
        btn_paintDf.onclick = function () {
            toggle();
            clearCanvas();
        };
    }
}

function onloadPopup() {
    blur.classList.toggle('active');
    popup.classList.toggle('active');
}
// onloadPopup();

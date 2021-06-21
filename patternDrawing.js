// Phần này của Long
// get DOM
const board_paint = $('.board-paint');
const blur = $('#blur');
const popup = $('#popup');
const btn_paintDf = $('#default');
const iconCanvas = $('#icon-canvas');
const iconCheck = $$('.fa-check');
const txtEle = $$('.txt');
const slideEle = $$('.popup__slide');
const checkedIcon = $('#checked');
const paint_img = $('.paint__img');
const displayImg = $('#displayImg');
const file_img = $('#file-image');
const popup__upload = $('.popup__upload');
const cancer_popup = $('#cancer-popup');
const show_popup = $('.paint__show-popup');
const default_canvas = $('.paint__default-canvas');

//functions

// set wallpapers for canvas
function setBgBoardPaint(imgUrl) {
    if (imgUrl === '') {
        paint_img.src = imgUrl;
    } else if (typeof imgUrl == 'object') {
        paint_img.src = URL.createObjectURL(imgUrl);
    } else {
        paint_img.src = imgUrl;
    }
}

// image selection processing
function handleSetCheckedImg(i, element) {
    console.log(element);

    popup__upload.classList.remove('active');
    for (let j = 0; j < element.length; j++) {
        var el = element[0];
        while (el) {
            if (el.tagName == 'DIV') {
                el.classList.remove('active');
            }
            el = el.nextSibling;
        }
        isCheckBtn = true;
        element[i].classList.add('active');
        break;
    }
}

// toggle popup
function toggle() {
    blur.classList.toggle('active');
    popup.classList.toggle('active');
    clearCanvas();
    getImgBg();
    clearBgImgDisplayImg();
    handleImageOnCanvas();
}

// get upload photo address
function getImgBg() {
    document
        .querySelector('input[type="file"]')
        .addEventListener('change', function () {
            if (this.files && this.files[0]) {
                displayImg.onload = () => {
                    URL.revokeObjectURL(displayImg.src);
                };
                setDefaultDisplayImg(this.files[0]);
            }
        });
}

// block photo selection
function clearBgImgDisplayImg() {
    displayImg.src = {};
    file_img.style.display = 'block';
    popup__upload.classList.remove('active');
    slideEle.forEach((slide) => {
        isCheckBtn = false;
        slide.classList.remove('active');
    });
}

// default image processing
function setDefaultDisplayImg(imgImage) {
    displayImg.src = URL.createObjectURL(imgImage);
    file_img.style.display = 'none';
    popup__upload.classList.add('active');
    isCheckBtn = true;
    dispatchImg(imgImage);
    slideEle.forEach((slide) => {
        slide.classList.remove('active');
    });
}

// message when choosing default drawing
function setBgBoardPaintDefault() {
    const isSet = confirm('Bạn sẽ phải vẻ lại từ đầu nếu chọn Vẽ Mặc Định 😥');
    if (isSet === true) {
        setBgBoardPaint('');
        clearCanvas();
    }
}

// transmit image address
function handleImageOnCanvas() {
    for (let i = 0; i < slideEle.length; i++) {
        slideEle[i].onclick = function () {
            var imgUrl = slideEle[i].getAttribute('data-url');
            console.log(imgUrl);
            handleSetCheckedImg(i, slideEle);
            dispatchImg(imgUrl);
        };
    }
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
cancer_popup.addEventListener('click', toggle, false);
show_popup.addEventListener('click', toggle, false);
default_canvas.addEventListener('click', setBgBoardPaintDefault, false);

// Phần này của Long

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
            clearCanvas();
        } else {
            alert('Bạn Cần Chọn 1 Ảnh Mẫu Để Vẽ 🤗');
            e.preventDefault();
        }
    };
}

function handleSetCheckedImg(i, element) {
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
function toggle() {
    blur.classList.toggle('active');
    popup.classList.toggle('active');
    getImgBg();
    clearBgImgDisplayImg();
}

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
function clearBgImgDisplayImg() {
    displayImg.src = {};
    plusIcon.style.display = 'block';
    popup__upload.classList.remove('active');
    slideEle.forEach((slide) => {
        isCheckBtn = false;
        slide.classList.remove('active');
    });
}

function setDefaultDisplayImg(imgImage) {
    displayImg.src = URL.createObjectURL(imgImage);
    plusIcon.style.display = 'none';
    popup__upload.classList.add('active');
    isCheckBtn = true;
    dispatchImg(imgImage);
    slideEle.forEach((slide) => {
        slide.classList.remove('active');
    });
}
function setBgBoardPaintDefault() {
    const isSet = confirm('Bạn sẽ phải vẻ lại từ đầu nếu chọn Vẽ Mặc Định 😥');
    if (isSet === true) {
        setBgBoardPaint('');
        clearCanvas();
    }
}

nextBtn.addEventListener('click', () => {
    if (counter <= slideEle.length / 3) {
        counter += 3;
        console.log(size);
        sliderEles.style.transform = 'translateX(-' + size * counter + 'px)';
        checkIconMove(counter);
    }
});

prevBtn.addEventListener('click', () => {
    if (counter >= 0) {
        counter -= 3;
        sliderEles.style.transform = 'translateX(-' + size * counter + 'px)';
        console.log(counter);
    }
});

// onloadPopup();

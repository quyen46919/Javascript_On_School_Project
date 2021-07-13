// Phần này của Long
// GET DOM
const board_paint = $('.paint__board');
const blur = $('#blur');
const popup = $('#popup');
const btn_paintDf = $('#default');
const iconCanvas = $('#icon-canvas');
const iconCheck = $$('.fa-check');
const txtEle = $$('.txt');
const checkedIcon = $('#checked');
const paint_img = $('.paint__img');
const displayImg = $('#displayImg');
const file_img = $('#file-image');
const popup__upload = $('.popup__upload');
const cancer_popup = $('#cancer-popup');
const show_popup = $('.paint__show-popup');
const default_canvas = $('.paint__default-canvas');
const popup__over = $('.popup__over');
const btn_prev = $('.popup__btn-prev');
const btn_next = $('.popup__btn-next');
const select_theme = $('#select-theme');
const select_decorate = $('#select-decorate');
const popup__slider = $('.popup__slider');
const sh_canvas = $('#icon-canvas');
const icon_eye = $('#icon-eye');
/*End DOM*/
/* VARIABLES */
var arrBoxVal = [];
/*ENd VARIABLES*/

/*FUNCTIONS*/
// đặt dữ liệu cho popup slider
function getDataImgUrl(arrImgs1, arrImgs2) {
    function setDataBgSlile(themeVal = 'Animals', arrImgsVal) {
        arrBoxVal.push(arrImgsVal);
        // phân tích và xử lý dữ liệu đầu vào
        for (let i = 1; i < arrBoxVal.length; i++) {
            if (typeof arrBoxVal[0] === 'undefined') {
                arrBoxVal[0] = arrImgs1;
            }
            if (typeof arrBoxVal[i] === 'undefined') {
                arrBoxVal.splice(i, 1);
            }
        }
        arrImgs = arrBoxVal[arrBoxVal.length - 1];

        //tạo băng chuyền slider + gán active cho slide, bước này phức tạp vãi lều
        function moveSlider(theme, arrBox) {
            for (let i = 0; i < arrImgs.length; i++) {
                if (arrImgs[i].title == theme) {
                    const slideLeng = arrImgs[i].valueImg.length - 1;
                    arrBox[0].setAttribute('id', 'lastClone');
                    arrBox[slideLeng].setAttribute('id', 'firstClone');
                }
            }

            let counter = 1;
            const sizeSlide = arrBox[0].clientHeight;
            arrBox[1].classList.add('active');
            popup__over.style.transform =
                'translateY(' + -sizeSlide * counter + 'px)';
            function setActiveSlider(n) {
                arrBox[n].classList.add('active');
            }
            //xác định slide nào đang là active
            function getActiveSlider() {
                for (let i = 1; i < arrBox.length - 1; i++) {
                    if (arrBox[i].classList.value == 'popup__slide active') {
                        for (let j = 0; j < arrImgs.length; j++) {
                            const slideLeng = arrImgs[j].valueImg.length;
                            for (let n = 0; n < slideLeng; n++) {
                                if (
                                    arrBox[i].getAttribute('data-urlImg') ==
                                    arrImgs[j].valueImg[n].urlImg
                                ) {
                                    handleHoverPopupNote(
                                        arrImgs[j].valueImg[n],
                                    );
                                }
                            }
                        }
                        break;
                    }
                }
            }
            getActiveSlider();
            //Tạo nút bấm di chuyển slide
            btn_prev.onclick = () => {
                if (counter >= arrBox.length - 1) return;
                popup__over.style.transition = 'transform 0.6s ease-in-out';
                removeClassActive(arrBox.length - 1, counter);
                counter++;
                setActiveSlider(counter);
                getActiveSlider();
                popup__over.style.transform =
                    'translateY(' + -sizeSlide * counter + 'px)';
                isCheckBtn = false;
            };
            btn_next.onclick = () => {
                if (counter <= 0) return;
                popup__over.style.transition = 'transform 0.6s ease-in-out';
                removeClassActive(0, counter);
                counter--;
                setActiveSlider(counter);
                getActiveSlider();
                popup__over.style.transform =
                    'translateY(' + -sizeSlide * counter + 'px)';
                isCheckBtn = false;
            };
            function removeClassActive(numDf, counter) {
                popup__slider.classList.remove('active');
                arrBox[numDf].classList.remove('active');
                arrBox[counter].classList.remove('active');
            }
            popup__over.addEventListener('transitionend', () => {
                if (arrBox[counter].id == 'lastClone') {
                    popup__over.style.transition = 'none';
                    counter = arrBox.length - 2;
                    popup__over.style.transform =
                        'translateY(' + -sizeSlide * counter + 'px';
                }
                if (arrBox[counter].id == 'firstClone') {
                    popup__over.style.transition = 'none';
                    counter = arrBox.length - counter;
                    popup__over.style.transform =
                        'translateY(' + -sizeSlide * counter + 'px';
                }
            });
        }

        //lấy ra title, theme của từng slide rồi gán nó vào note
        var arrNoteP = [];
        function handleHoverPopupNote(imgVal) {
            let titleTheme = '';
            //cái ni lấy Theme của slider đó
            for (let i = 0; i < arrImgs.length; i++) {
                if (arrImgs[i].title == themeVal) {
                    for (let j = 0; j < arrImgs[i].valueImg.length; j++) {
                        if (arrImgs[i].valueImg[j] == imgVal) {
                            titleTheme = arrImgs[i].title;
                        }
                    }
                }
            }
            // tạo note rồi gán giá trị cho note đó
            if (popup) {
                const popup__note = document.createElement('div');
                popup__note.classList.add(`popup__note`);
                const noteEle = `<h2>${imgVal.nameImg}</h2>
                                     <span>${imgVal.status}</span>
                                     <span>Chủ đề: ${titleTheme}</span>`;
                popup__note.innerHTML = noteEle;
                popup.appendChild(popup__note);
                arrNoteP.push(popup__note);
                if (arrNoteP.length >= 1) {
                    for (let i = 0; i < arrNoteP.length; i++) {
                        if (i < arrNoteP.length - 1) {
                            popup.removeChild(arrNoteP[i]);
                            arrNoteP.splice(i, 1);
                        }
                    }
                }
            }
            // tạo hiệu ứng trượt cho note, nhìn cho nó ảo
            let t,
                hoverTime = 500;
            function setTimeOutNotePopup() {
                const popup_note = $$('.popup__note');
                popup__slider.onmouseover = function () {
                    t = setTimeout(setTimeOutNote, hoverTime);
                };
                function setTimeOutNote() {
                    popup_note[popup_note.length - 1].setAttribute(
                        'id',
                        'active',
                    );
                }
                popup__slider.onmouseout = function () {
                    clearTimeout(t);
                    popup_note[popup_note.length - 1].setAttribute('id', '');
                };
            }
            setTimeOutNotePopup();
        }
        //Tạo những slide từ data
        function setSliderOver() {
            if (popup__over) {
                let arrBox = [];
                for (let i = 0; i < arrImgs.length; i++) {
                    if (arrImgs[i].title === themeVal) {
                        const slideLeng = arrImgs[i].valueImg.length;
                        for (let j = 0; j < slideLeng; j++) {
                            const popup__slide = document.createElement('div');
                            popup__slide.classList.add(`popup__slide`);

                            popup__slide.setAttribute(
                                'data-urlImg',
                                arrImgs[i].valueImg[j].urlImg,
                            );

                            arrBox.push(popup__slide);

                            const imgEle = `<img class="popup__img" src=${arrImgs[i].valueImg[j].urlImg} alt=${arrImgs[i].valueImg[j].nameImg}>`;
                            popup__slide.innerHTML = imgEle;
                            popup__over.appendChild(popup__slide);
                        }
                    }
                }
                moveSlider(themeVal, arrBox);
                handleImageOnCanvas(arrBox);
            }
        }
        getSelecttheme();
        setSliderOver();
        getSelectdecorate();
    }
    //xoá các note đã tồn tại đi thay bằng note của hiện tại
    function removeChildNote() {
        const popup_note = $$('.popup__note');
        console.log(popup_note.length);
        if (popup_note.length >= 1) {
            for (let i = 0; i < popup_note.length; i++) {
                if (i < popup_note.length - 1) {
                    popup_note[i].remove();
                }
            }
        }
    }
    //xoá các slide của hiện tại đi
    function removeChildEle() {
        popup__over.textContent = '';
    }

    // tạo select tuỳ chọn cho người dùng
    var themeVal = 'Animals';
    var decorateVal;

    function getSelecttheme(arrImgs) {
        //select này giúp chọn chủ đề
        select_theme.onchange = function () {
            themeVal = select_theme.options[select_theme.selectedIndex].value;
            removeChildEle();
            removeChildNote();
            getSelectdecorate(themeVal);
            setDataBgSlile(themeVal, arrImgs);
            popup__slider.classList.remove('active');
        };
    }
    function getSelectdecorate(themeVal) {
        //select này giúp chọn có màu hay ko có màu
        select_decorate.onchange = function () {
            var decorateVal =
                select_decorate.options[select_decorate.selectedIndex].value;
            removeChildEle();
            popup__slider.classList.remove('active');
            select_theme.value = 'Animals';
            switch (decorateVal) {
                case 'Colorful':
                    getSelecttheme(arrImgs2);
                    setDataBgSlile(themeVal, arrImgs2);
                    break;
                case 'No Color':
                    setDataBgSlile(themeVal, arrImgs1);
                    getSelecttheme(arrImgs1);
                    break;
            }
        };
    }

    setDataBgSlile('Animals', arrImgs1);
}
// cài hình ảnh vào cho canvas
function setBgBoardPaint(imgUrl, img2) {
    if (typeof img2 == 'string' && typeof imgUrl == 'string') {
        if (imgUrl.length > 10000) {
            image = new Image();
            image.src = imgUrl;
            image.onload = function () {
                context.drawImage(image, 0, 0);
            };
            paint_img.src = img2;
        }
    } else {
        if (imgUrl === '') {
            paint_img.src = imgUrl;
        } else if (typeof imgUrl == 'object') {
            paint_img.src = URL.createObjectURL(imgUrl);
        } else {
            paint_img.src = imgUrl;
        }
    }

    conditionHideButton(imgUrl);
}
conditionHideButton('');
//tạo nút đóng mở popup
function toggle() {
    blur.classList.toggle('active');
    popup.classList.toggle('active');
    popup__slider.classList.remove('active');
    table_geometry.classList.remove('active');
    table_img.classList.remove('active');
    img_canvas.classList.remove('active');
    removePopup();
    getImgBg();
    clearBgImgDisplayImg();
}

// đóng popup từ ngoài body
function removePopup() {
    window.onclick = (e) => {
        if (!e.target.closest('#popup') && !e.target.closest('#default')) {
            blur.classList.remove('active');
            popup.classList.remove('active');
        }
    };
}

//  lấy dữ liệu ảnh từ người dùng
function getImgBg() {
    document
        .querySelector('input[type="file"]')
        .addEventListener('change', function () {
            if (this.files && this.files[0]) {
                displayImg.onload = () => {
                    URL.revokeObjectURL(displayImg.src);
                };

                arrAdress = this.files[0].name;
                // đặt điều kiện chỉ những file có đuôi này mới được show
                let ReImage = /\.jpg|\.png|\.jpeg|\.gif/g;

                if (ReImage.test(arrAdress)) {
                    setDefaultDisplayImg(this.files[0]);
                }
            }
        });
}

// đặt lại hình nền khi người dùng bấm thoát
function clearBgImgDisplayImg() {
    displayImg.src = {};
    file_img.style.display = 'block';
    popup__upload.classList.remove('active');
}

// tạo nút vẽ theo mặc định
function setDefaultDisplayImg(imgImage) {
    popup__slider.classList.remove('active');
    displayImg.src = URL.createObjectURL(imgImage);
    file_img.style.display = 'none';
    popup__upload.classList.add('active');
    isCheckBtn = true;
    dispatchImg(imgImage);
    hideShowCanvas(imgImage);
}

// thông báo khi người dùng chọn vẽ theo mặc định
function setBgBoardPaintDefault() {
    const img_content = $$('.paint__img-content');
    const isSet = confirm('Bạn sẽ phải vẻ lại từ đầu nếu chọn Vẽ Mặc Định 😥');
    if (isSet === true) {
        setBgBoardPaint('');
        clearCanvas();
        sh_canvas.style.display = 'none';
        isSave = false;
        img_content.forEach((a) => a.classList.remove('active'));
        input_name.value = '';
        url_img_sample = '';
    }
}
function conditionHideButton(imgUrl) {
    if (imgUrl == '') {
        default_canvas.disabled = true;
    } else {
        default_canvas.disabled = false;
        default_canvas.addEventListener('click', setBgBoardPaintDefault, false);
    }
}
// tạo hiệu ứng chọn ảnh cho người dùng biết
function handleImageOnCanvas(slideEle) {
    for (let i = 0; i < slideEle.length; i++) {
        slideEle[i].onclick = function () {
            var imgUrl = slideEle[i].getAttribute('data-urlImg');
            popup__slider.classList.add('active');
            popup__upload.classList.remove('active');
            popup__slider.style.transition = '0.15s';
            isCheckBtn = true;
            dispatchImg(imgUrl);
            hideShowCanvas(imgUrl);
        };
    }
}

// gửi url hình ảnh + thông báo khi người dùng chưa chọn ảnh mà click
function dispatchImg(imgUrl) {
    checkedIcon.onclick = function (e) {
        if (isCheckBtn) {
            isCheckBtn = false;
            getImgBg(isCheckBtn);
            setBgBoardPaint(imgUrl);
            toggle();
            clearCanvas();
            sh_canvas.style.display = 'block';
            url_img_sample = imgUrl;
            isSave = false;
        } else {
            alert('Bạn Cần Chọn 1 Ảnh Mẫu Để Vẽ 🤗');
            e.preventDefault();
        }
    };
}
// ẩn hiện hình nền trong canvas
function hideShowCanvas(img) {
    sh_canvas.onmousedown = () => {
        icon_eye.setAttribute('class', 'far fa-eye-slash');
        setBgBoardPaint('');
    };
    sh_canvas.onmouseup = () => {
        icon_eye.setAttribute('class', 'far fa-eye');
        setBgBoardPaint(img);
    };
}
dispatchImg();

// add event to call functions
cancer_popup.addEventListener('click', toggle, false);
show_popup.addEventListener('click', toggle, false);

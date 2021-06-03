// Phần này của Long
const blur = document.getElementById('blur');
const popup = document.getElementById('popup');

function toggle() {
    blur.classList.toggle('active');
    popup.classList.toggle('active');
}

function onloadPopup() {
    blur.classList.toggle('active');
    popup.classList.toggle('active');
}

onloadPopup();

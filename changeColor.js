var inputred = document.getElementById('input-red');
var inputgreen = document.getElementById('input-green');
var inputblue = document.getElementById('input-blue');
console.log(inputred);
var btnaadcolor = document.getElementById('btnAddColor');
document.getElementById('btnAddColor').style.backgroundColor = draw_color;
var changecolorbox = document.getElementById('changecolorbox');

const colorpickers = [
    ...document.querySelectorAll('.paint__change-color-box-row-rows'),
];
console.log(colorpickers);
var rmadd = document.querySelector('.paint__addcolor');
var cancelbtn = document.querySelector('.paint__addcolor-container-btn-cancel');
cancelbtn.addEventListener('click', (e) => {
    rmadd.classList.add('paint__addcolor-transform');
});
var addcolorbtn = document.querySelector('.paint__addcolor-container-btn-add');

class Picker {
    constructor(target, width, height) {
        this.target = target;
        this.height = height;
        this.width = width;
        this.target.height = height;
        this.target.width = width;

        //get contexts
        this.contexts = this.target.getContext('2d');

        //circle
        this.pickerCircle = { x: 10, y: 10, width: 8, height: 8 };

        this.listenForEvents();
    }

    draw() {
        this.build();
    }

    build() {
        let gradient = this.contexts.createLinearGradient(0, 0, this.width, 0);

        //color stops
        gradient.addColorStop(0.03, 'rgb(255, 0, 0)');
        gradient.addColorStop(0.15, 'rgb(255, 0, 255)');
        gradient.addColorStop(0.33, 'rgb(0, 0, 255)');
        gradient.addColorStop(0.49, 'rgb(0, 255, 255)');
        gradient.addColorStop(0.67, 'rgb(0, 255, 0)');
        gradient.addColorStop(0.84, 'rgb(255, 255, 0)');
        gradient.addColorStop(0.95, 'rgb(255, 0, 0)');
        gradient.addColorStop(0.1, 'rgb(255, 0, 0)');
        //Fill it
        this.contexts.fillStyle = gradient;
        this.contexts.fillRect(0, 0, this.width, this.height);

        //Apply black and white
        gradient = this.contexts.createLinearGradient(0, 0, 0, this.height);
        gradient.addColorStop(0, 'rgba(255, 255, 255,1)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255,0)');
        gradient.addColorStop(0.5, 'rgba(0, 0, 0,0)');
        gradient.addColorStop(1, 'rgba(0, 0, 0,1)');
        this.contexts.fillStyle = gradient;
        this.contexts.fillRect(0, 0, this.width, this.height);

        //circle
        this.contexts.beginPath();
        this.contexts.arc(
            this.pickerCircle.x,
            this.pickerCircle.y,
            this.pickerCircle.width,
            0,
            Math.PI * 2,
        );
        this.contexts.strokeStyle = 'black';
        this.contexts.stroke();
        this.contexts.closePath();
    }

    listenForEvents() {
        let isMouseDown = false;
        const onMouseDown = (e) => {
            let currentX = e.clientX - 505;
            //    console.log(this.target.offsetLeft);
            let currentY = e.clientY - 321;
            //    console.log(this.target.offsetTop);
            if (
                currentY > this.pickerCircle.Y &&
                currentY < this.pickerCircle.y + this.pickerCircle.width &&
                currentX > this.pickerCircle.x &&
                currentX < this.pickerCircle.width
            ) {
                isMouseDown = true;
            } else {
                this.pickerCircle.x = currentX;
                this.pickerCircle.y = currentY;
            }
        };
        const onMouseMove = (e) => {
            if (isMouseDown) {
                let currentX = e.clientX - this.target.offsetLeft;
                let currentY = e.clientY - this.target.offsetTop;
                this.pickerCircle.x = currentX;
                this.pickerCircle.y = currentY;
            }
        };
        const onMouseUp = (e) => {
            isMouseDown = false;
        };

        //Register
        this.target.addEventListener('mousedown', onMouseDown);
        this.target.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', () =>
            this.onChangeCallback(this.getPickedColor()),
        );
    }
    getPickedColor() {
        let imageData = this.contexts.getImageData(
            this.pickerCircle.x,
            this.pickerCircle.y,
            1,
            1,
        );
        return {
            r: imageData.data[0],
            g: imageData.data[1],
            b: imageData.data[2],
        };
    }
    onChange(callback) {
        this.onChangeCallback = callback;
    }
}

let picker = new Picker(
    document.getElementById('paint__change-color-picker'),
    350,
    350,
);
//Draw
setInterval(() => picker.draw(), 1);

//CODE CHON MAU NHAP BANG TAY
var inputRed = 0;

//CODE CHON MAU O BANG CO SAN
colorpickers.forEach((colorpicker) => {
    colorpicker.addEventListener('click', (e) => {
        draw_color = e.target.style.backgroundColor;
        document.getElementById('changecolorbox').style.backgroundColor =
            draw_color;
        document.getElementById('btnAddColor').style.backgroundColor =
            draw_color;
        changecolorbox.style.backgroundColor = draw_color;

        // rmadd.classList.remove('paint__addcolor-transform')
    });
});

btnaadcolor.addEventListener('click', (e) => {
    rmadd.classList.remove('paint__addcolor-transform');
});

picker.onChange((color) => {
    //CODE HIEN THI MAU
    const html = `
        <div class="paint__addcolor-container-input-background" id="paint__addcolor-container-input-background"></div>
        <label class="paint__addcolor-container-input-background-label">Red</label>
        <input  class="paint__addcolor-container-input-background-input" id="input-red" type="number" value="${color.r}">
        <label class="paint__addcolor-container-input-background-label">Green</label>
        <input  class="paint__addcolor-container-input-background-input" id="input-green" type="number" value="${color.g}">
        <label class="paint__addcolor-container-input-background-label">Blue</label>
        <input  class="paint__addcolor-container-input-background-input" id="input-blue" type="number" value="${color.b}">
       `;

    document.querySelector('#paint__addcolor-container-input').innerHTML = html;
    var backgroundColor = `rgb(${color.r}, ${color.g},${color.b})`;

    document.getElementById(
        'paint__addcolor-container-input-background',
    ).style.backgroundColor = backgroundColor;

    //CODE ADD MAU RA NGOAI
    addcolorbtn.addEventListener('click', (e) => {
        rmadd.classList.add('paint__addcolor-transform');
        draw_color = backgroundColor;
        console.log(draw_color);
        document.getElementById('changecolorbox').style.backgroundColor =
            draw_color;
        document.getElementById('btnAddColor').style.backgroundColor =
            draw_color;

        inputred.addEventListener('keyup', (e) => {
            inputRed = +e.target.value;
            var inputGreen = 0;
            inputgreen.addEventListener('keyup', (e) => {
                inputGreen = +e.target.value;
                var inputBlue = 0;
                inputblue.addEventListener('keyup', (e) => {
                    inputBlue = +e.target.value;
                    draw_color = `rgb(${inputRed}, ${inputGreen},${inputBlue})`;
                    document.getElementById(
                        'paint__addcolor-container-input-background',
                    ).style.backgroundColor = draw_color;
                });
            });
        });
    });
});


// Declare DOM variables
var inputred = document.getElementById("input-red");
var inputgreen = document.getElementById("input-green");
var inputblue = document.getElementById("input-blue");
var btnaadcolor = document.getElementById("btnAddColor");
var changecolorbox = document.getElementById("changecolorbox");
var popupPicker = document.querySelector('.paint__addcolor');
var cancelbtn = document.querySelector('.paint__picker--cancel');
var addcolorbtn = document.querySelector('.paint__picker--add');
const blurBg = document.querySelector('.paint__blur-bg');

// add Active class Event
document.querySelector('#changecolorbox').style.backgroundColor = draw_color;
cancelbtn.addEventListener('click',(e)=>{
    popupPicker.classList.remove('active');
    blurBg.classList.remove('active');
})
document.getElementById("btnAddColor").style.backgroundColor = draw_color;
const colorpickers = [...document.querySelectorAll('.paint__color-box')];

document.querySelector('#changecolorbox').addEventListener('click',(e) =>{
    popupPicker.classList.add('active');
    blurBg.classList.add('active');
})

// create Picker Class
class Picker {
    constructor(target, width, height){
       this.target = target;
       this.height = height;
       this.width = width;
       this.target.height = height;
       this.target.width = width;

       //get contexts
       this.contexts = this.target.getContext("2d");

       //circle
       this.pickerCircle = {x : 10, y : 10 , width : 10, height: 10};

       this.listenForEvents();
   }

   draw(){
       this.build();
   }

   build(){
       let gradient = this.contexts.createLinearGradient(0, 0,
           this.width,0);
       
       //color stops
       gradient.addColorStop(0.03, "rgb(255, 0, 0)");
       gradient.addColorStop(0.15, "rgb(255, 0, 255)");
       gradient.addColorStop(0.33, "rgb(0, 0, 255)");
       gradient.addColorStop(0.49, "rgb(0, 255, 255)");
       gradient.addColorStop(0.67, "rgb(0, 255, 0)");
       gradient.addColorStop(0.84, "rgb(255, 255, 0)");
       gradient.addColorStop(0.95, "rgb(255, 0, 0)");
       gradient.addColorStop(0.1, "rgb(255, 0, 0)");
       //Fill it
       this.contexts.fillStyle = gradient;
       this.contexts.fillRect(0, 0, this.width, this.height);

       //Apply black and white 
       gradient = this.contexts.createLinearGradient(0, 0,
            0, this.height);
       gradient.addColorStop(0, "rgba(255, 255, 255,1)");
       gradient.addColorStop(0.5, "rgba(255, 255, 255,0)");
       gradient.addColorStop(0.5, "rgba(0, 0, 0,0)");
       gradient.addColorStop(1, "rgba(0, 0, 0,1)");
       this.contexts.fillStyle = gradient;
       this.contexts.fillRect(0, 0, this.width, this.height);

       //circle 
       this.contexts.beginPath();
       this.contexts.arc(this.pickerCircle.x, this.pickerCircle.y,
                this.pickerCircle.width, 0, Math.PI*2 );
       this.contexts.strokeStyle = "black";
       this.contexts.stroke();
       this.contexts.closePath();
   }

   listenForEvents(){
       let isMouseDown = false;
       const onMouseDown  = (e) => {
           mouseEvent(e);
           let currentX = e.clientX - 370;
           let currentY = e.clientY - 190;
           if(currentY > this.pickerCircle.Y && currentY <
        this.pickerCircle.y + this.pickerCircle.width && currentX > 
        this.pickerCircle.x && currentX < this.pickerCircle.width){
            isMouseDown = true;
        } else{
           this.pickerCircle.x = currentX;
           this.pickerCircle.y = currentY;
        }
       }
       const onMouseMove = (e) =>{
           if(isMouseDown){
               let currentX = e.clientX - this.target.offsetLeft;
               let currentY = e.clientY - this.target.offsetTop;
               this.pickerCircle.x = currentX;
               this.pickerCircle.y = currentY;
           }
       }
       const onMouseUp = (e)=>{
           isMouseDown= false;
       }

       //Register
       this.target.addEventListener("mousedown", onMouseDown);
       this.target.addEventListener("mousemove", onMouseMove);
       document.addEventListener("mouseup", () => this.onChangeCallback(this.getPickedColor()));
   }
   getPickedColor(){
    let imageData = this.contexts.getImageData(this.pickerCircle.x,
        this.pickerCircle.y, 1, 1);
    return {r: imageData.data[0], g: imageData.data[1], b: imageData.data[2]}
    }
    onChange(callback) {
    this.onChangeCallback = callback;
    }
}


let picker = new Picker(document.getElementById("paint__background--canvas"), 320, 280);
//Draw
setInterval(() =>picker.draw(), 1); 


//CODE CHON MAU O BANG CO SAN
colorpickers.forEach(colorpicker => {
    colorpicker.addEventListener('click', (e) => {
        draw_color = e.target.style.backgroundColor;
        document.getElementById("changecolorbox").style.backgroundColor = draw_color;
        changecolorbox.style.backgroundColor= draw_color;
    })
})

//Mỗi lần chọn lại màu ở Picker thì cũng thay đổi ở bảng hiển thị bên cạnh
picker.onChange((color)=>{
    const html = `
        <div class="paint__picker--show"></div>
        <label class="paint__picker--label">Red</label>
        <input class="paint__picker-input" id="input-red" type="number" value="${color.r}">
        <label class="paint__picker--label">Green</label>
        <input class="paint__picker-input" id="input-green" type="number" value="${color.g}">
        <label class="paint__picker--label">Blue</label>
        <input class="paint__picker-input" id="input-blue" type="number" value="${color.b}">
    `
    
    document.querySelector('#paint__input').innerHTML = html;
    var backgroundColor = `rgb(${color.r}, ${color.g},${color.b})`;
    document.querySelector('.paint__picker--show').style.backgroundColor = backgroundColor;

    //CODE ADD MAU RA NGOAI
    addcolorbtn.addEventListener('click',(e) =>{
        popupPicker.classList.add('active');
        draw_color = backgroundColor;
        document.getElementById("changecolorbox").style.backgroundColor = draw_color;
        document.getElementById("btnAddColor").style.backgroundColor= draw_color;
        blurBg.classList.remove('active');
        popupPicker.classList.remove('active');
    })
});

// thay đổi màu bằng cách nhập các tham số RGB
// VẪN CÒN BUG Ở CHỖ NÀY
// KHÔNG THỂ NHẤN VÀO THAY ĐỔI GIÁ TRỊ CỦA Ô INPUT ĐƯỢC
var inputRed = 0;
var inputGreen = 0;   
var inputBlue = 0;
inputred.onkeyup = (e) =>{
    inputRed = +e.target.value;
    console.log(inputRed)
    inputgreen.addEventListener('keyup',(e)=>{
        inputGreen = +e.target.value;
        console.log(inputGreen)
        inputblue.addEventListener('keyup',(e)=>{
            inputBlue = +e.target.value;
            draw_color = `rgb(${inputRed},${inputGreen},${inputBlue})`;
            document.querySelector('.paint__picker--show').style.backgroundColor= draw_color;
        })
        console.log(draw_color)
    })
};
   


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
        this.pickerCircle = { x: 10, y: 10, width: 7, height: 7 };

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
        gradient.addColorStop(0.1, 'rgb(255, 0, 0)');
        gradient.addColorStop(0.95, 'rgb(255, 0, 0)');
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
            let currentX = e.clientX - this.target.offsetLeft;
            let currentY = e.clientY - this.target.offsetTop;
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

    constructor(target, width, height){
       this.target = target;
       this.height = height;
       this.width = width;
       this.target.height = height;
       this.target.width = width;

       //get contexts
       this.contexts = this.target.getContext("2d");

       //circle
       this.pickerCircle = {x : 10, y : 10 , width : 7, height: 7};

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
           let currentX = e.clientX - this.target.offsetLeft;
           let currentY = e.clientY - this.target.offsetTop;
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

let picker = new Picker(document.getElementById("paint__change-color-picker"), 350, 350);


//Draw
setInterval(() => picker.draw(), 1);

picker.onChange((color) => {
    draw_color = `rgb(${color.r}, ${color.g},${color.b})`;
});

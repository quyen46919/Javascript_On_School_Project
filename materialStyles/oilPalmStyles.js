

function oilPalmDraw(){
    canvas.onmousedown = function(e) {
        is_drawing = true;
        context.lineWidth = draw_width;
        context.lineJoin = context.lineCap = 'round';

        // fix shadowBlur 
        // author: Quyen
        context.shadowBlur = shadow_blur;

        context.shadowColor = draw_color;
        context.fillStyle = draw_color;
        context.strokeStyle = draw_color;
        context.beginPath();
        e.preventDefault();
      };
      canvas.onmousemove = function(e) {
        mouseEvent(e);
        if (is_drawing) {        
            context.lineTo(
                mouse.x,mouse.y
            );
            mouse.lastX = mouse.x;
            mouse.lastY = mouse.y;
            context.stroke();
            
        }
      };
      canvas.onmouseup = function(e) {
        is_drawing = false;
        context.closePath();

        e.preventDefault();
        if (e.type != 'mouseout') {
            restore_array.push(
                context.getImageData(0, 0, canvas.width, canvas.height),
            );
            index += 1;
        }
      };
    
      
}
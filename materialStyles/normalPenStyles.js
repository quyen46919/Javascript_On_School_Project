
function normalDraw(){
    
    canvas.onmousedown = function(e) {
        is_drawing = true;
        context.shadowBlur = 0;
        context.beginPath();
        context.strokeStyle = draw_color;
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        e.preventDefault();
    }

    canvas.onmousemove = function(e) {
        if (is_drawing) {
            context.lineTo(
                e.clientX - canvas.offsetLeft,
                e.clientY - canvas.offsetTop,
            );
            
            context.strokeStyle = draw_color;
            context.lineWidth = draw_width;
            context.stroke();
        }
        e.preventDefault();
    }

    canvas.onmouseup = function(e) {
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
}
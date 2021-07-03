
function inkPenDraw(){
    var inkpen_draw_width = draw_width;
    canvas.onmousedown = function(e) {
        mouseEvent(e);
        is_drawing = true;
        context.fillStyle = draw_color;
        // lastX = e.pageX - this.offsetLeft;
        // lastY = e.pageY - this.offsetTop;
        context.shadowBlur = 0;
    };

    
    canvas.onmousemove = function(e) {
        mouseEvent(e);
        if (is_drawing) {
            mouseX = mouse.x
            mouseY = mouse.y;
    
            // find all points between        
            var x1 = mouseX,
                x2 = mouse.lastX,
                y1 = mouseY,
                y2 = mouse.lastY;
    
            var steep = (Math.abs(y2 - y1) > Math.abs(x2 - x1));
            if (steep){
                var x = x1;
                x1 = y1;
                y1 = x;
    
                var y = y2;
                y2 = x2;
                x2 = y;
            }
            if (x1 > x2) {
                var x = x1;
                x1 = x2;
                x2 = x;
    
                var y = y1;
                y1 = y2;
                y2 = y;
            }
    
            var dx = x2 - x1,
                dy = Math.abs(y2 - y1),
                error = 0,
                de = dy / dx,
                yStep = -1,
                y = y1;
    
            if (y1 < y2) {
                yStep = 1;
            }
    
            inkpen_draw_width = 5 - Math.sqrt((x2 - x1) *(x2-x1) + (y2 - y1) * (y2-y1))/10;
            if(inkpen_draw_width < 1){
                inkpen_draw_width = 1;   
            }
    
            for (var x = x1; x < x2; x++) {
                if (steep) {
                    context.fillRect(y, x, inkpen_draw_width , inkpen_draw_width );
                } else {
                    context.fillRect(x, y, inkpen_draw_width , inkpen_draw_width );
                }
    
                error += de;
                if (error >= 0.5) {
                    y += yStep;
                    error -= 1.0;
                }
            }

        }
        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;
    }
    canvas.onmouseup = function(e){
        is_drawing = false;
        e.preventDefault();
        if (e.type != 'mouseout') {
            restore_array.push(
                context.getImageData(0, 0, canvas.width, canvas.height),
            );
            index += 1;
        }
    }
}

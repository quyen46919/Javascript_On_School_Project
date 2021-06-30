
function oilPalmDraw(){
    canvas.onmousedown = function(e) {
        is_drawing = true;
        context.lineWidth = 5;
        context.lineJoin = context.lineCap = 'round';
        context.shadowBlur = 10;
        context.shadowColor = draw_color;
        context.fillStyle = draw_color;
        context.strokeStyle = draw_color;
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.lineTo(
            e.clientX - canvas.offsetLeft,
            e.clientY - canvas.offsetTop,
        );
        e.preventDefault();
      };
      canvas.onmousemove = function(e) {
        if (is_drawing) {
            context.stroke();
            context.lineTo(
                e.clientX - canvas.offsetLeft,
                e.clientY - canvas.offsetTop,
            );
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
function sprayDraw(){
    var density = 200;
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
      
      canvas.onmousedown = function(e) {
        is_drawing = true;
        context.fillStyle = draw_color;
        context.lineWidth = 100;
        context.beginPath();
        context.shadowBlur = 0;
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        
      };
      canvas.onmousemove = function(e) {
        if (is_drawing) {
          for (var i = density; i--; ) {
            var radius = 20;
            var offsetX = getRandomInt(-radius, radius);
            var offsetY = getRandomInt(-radius, radius);
            context.fillRect(e.clientX + offsetX, e.clientY + offsetY, 1, 1);
            context.lineTo(
                e.clientX - canvas.offsetLeft,
                e.clientY - canvas.offsetTop,
            );
          }
        }
      };
      canvas.onmouseup = function(e) {
        is_drawing = false;
        e.preventDefault();
        if (e.type != 'mouseout') {
            restore_array.push(
                context.getImageData(0, 0, canvas.width, canvas.height),
            );
            index += 1;
        }
      };
}
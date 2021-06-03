window.addEventListener('load',() => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");

    // Resizing
    canvas.height = window.innerWidth;
    canvas.window = window.innerWidth;

    // Variables
    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting) return ;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        // styles for line
        // ctx.strokeStyle = 'red';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    // Call function
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
});
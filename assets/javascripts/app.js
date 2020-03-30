const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isDrwaing = false;
const clearButton = document.getElementById('toolbar-clear-canvas');
const colorPicker = document.querySelector('.toolbar-color-selector');
const strokeSize = document.querySelector('.toolbar-spraysize-selector');

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);
canvas.addEventListener('mouseout', stop);

clearButton.addEventListener('click', clearCanvas);
colorPicker.addEventListener('change', chooseColor);
strokeSize.addEventListener('change', chooseSize);

function start(e) {
    isDrwaing = true; 
    draw(e);
};

function draw({clientX, clientY}) {
    if (!isDrwaing) return;
    ctx.lineCap = 'round';

    ctx.lineTo(clientX, clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(clientX, clientY);
}

function stop() {
    isDrwaing = false;
    ctx.beginPath();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
}

function chooseColor(e) {
   ctx.strokeStyle = e.target.value;
}

function chooseSize(e) {
    ctx.lineWidth = e.target.value;
}

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
resizeCanvas();

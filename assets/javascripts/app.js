const canvas = documant.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isDrwaing = false;

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);
canvas.addEventListener('mouseout', stop);

function start(e) {
    isDrwaing = true; 
};

function draw({clientX, clientY}) {
    if (!isDrwaing) return;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#'
}


window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};


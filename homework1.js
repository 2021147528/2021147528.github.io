const canvas = document.getElementById('glCanvas');
const gl = canvas.getContext('webgl2');

if (!gl) {
    console.error("WebGL 2 is not supported by your browser");
}

canvas.width = 500;
canvas.height = 500;

render();

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.enable(gl.SCISSOR_TEST);

    gl.viewport(0, canvas.height/2, canvas.width/2, canvas.height/2);
    gl.scissor(0, canvas.height/2, canvas.width/2, canvas.height/2);
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.viewport(0, 0, canvas.width/2, canvas.height/2);
    gl.scissor(0, 0, canvas.width/2, canvas.height/2);
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.viewport(canvas.width/2, 0, canvas.width/2, canvas.height/2);
    gl.scissor(canvas.width/2, 0, canvas.width/2, canvas.height/2);
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.viewport(canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2);
    gl.scissor(canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2);
    gl.clearColor(0.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.addEventListener('resize', () => {
    let minSize = Math.min(window.innerWidth, window.innerHeight);

    canvas.width = minSize;
    canvas.height = minSize;

    gl.viewport(0, 0, canvas.width, canvas.height);
    render();
});

export function GetCanvas() {
    const canvas = document.querySelector('#canvas');
    canvas.width = document.documentElement.clientWidth / 2;
    canvas.height = document.documentElement.clientHeight / 2;

    return canvas;
}

export function GetContext(canvas) {
    const context = canvas.getContext('2d');
    return context;
}

export function InitState(canvas,state) {
    state.time = 1;
    state.size = document.querySelector('#length').value || 10;
    state.speed = document.querySelector('#speed').value;
    state.rectList = createRect(canvas,state);
}

function createRect(canvas, state) {
    const result = [];
    let width = canvas.width / state.size;
    for (let i = 0; i < state.size; i++) {
        result.push(new Rect(i, width,canvas));
    }
    return result;
} 

function Rect(i, width,canvas) {
    this.value = Math.floor(Math.random() * 100);
    this.height = canvas.height * this.value / 100;
    this.width = width;
    this.x = i * width;
    this.y = canvas.height - this.height;
    this.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}


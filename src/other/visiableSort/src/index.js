import './bootstrap.min.css';
import './style.css';
import { throttle } from './util';
import { GetContext, GetCanvas, InitState } from './init';

const canvas = GetCanvas();
const context = GetContext(canvas);

const state = {
    time: 1,
    speed: 20,
    size: 10,
    itl: NaN,
    rectList: [],
    sort: null
}

$('#build').addEventListener('click', () => {
    InitState(canvas,state);
    context.clearRect(0, 0, canvas.width, canvas.height);
    clearInterval(state.itl);
    init();
})
// 开始按钮
$('#start').addEventListener('click', () => {
    start();
});

$('#pause').addEventListener('click', () => {
    pause();
});

$('#single').onclick = throttle(single, 500);

$('#speed').addEventListener('change', () => {
    state.speed = $('#speed').value;
})




// 初始化
function init() {
    draw(context,state);
    state.sort = bubbleSort(state.rectList);
}
// 开始
function start() {
    state.itl = setInterval(() => {
        state.sort.next();
        state.time++;
    }, state.time * state.speed * 30)
}
// 暂停
function pause() {
    clearInterval(state.itl);
    state.time = 1;
}
// 单步
function single() {
    clearInterval(state.itl);
    state.sort.next();
}

function exchange(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
}
// 移动
function move(array, i, j) {
    let x = array[j].x - array[i].x,
        dx = x / 20;
    let timer = setInterval(() => {
        if (array[i].x - array[j].x > x) {
            exchange(array, i, j);
            clearInterval(timer);
        }
        else {
            context.clearRect(0, 0, canvas.width, canvas.height);
            array[j].x -= dx;
            array[i].x += dx;
            draw();
        }
    }, state.speed);
}
// 重绘
function draw() {
    for (let i = 0; i < state.rectList.length; i++) {
        context.fillStyle = state.rectList[i].color;
        context.fillRect(state.rectList[i].x, state.rectList[i].y, state.rectList[i].width, state.rectList[i].height);
        context.font = "bold 20px Arial"
        context.fillStyle = '#000';
        context.fillText(state.rectList[i].value, state.rectList[i].x + state.rectList[i].width / 3, state.rectList[i].y);
    }
}

function $(selector) {
    return document.querySelector(selector);
}

function* bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j].value > array[j + 1].value) {
                yield move(array, j, j + 1);
            }
        }
    }
}
import bubbleSort from 'sort.js';


const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
canvas.width = document.documentElement.clientWidth / 2;
canvas.height = document.documentElement.clientHeight / 2;


let time, speed = 20, size;
let rectArr = [], itl, sort;

$('#build').addEventListener('click',()=>{
    time = 1;
    size = document.getElementById('length').value || 10;
    context.clearRect(0, 0, canvas.width, canvas.height);
    clearInterval(itl);
    init();
})
// 开始按钮
$('#start').addEventListener('click',()=>{
    start();
});

$('#pause').addEventListener('click',()=>{
    pause();
});

// $('#single').addEventListener('click',()=>throttle(single,500));
$('#single').onclick = throttle(single,500);

$('#speed').addEventListener('change',()=>{
    speed = $('#speed').value;
})

function $(selector) {
    return document.querySelector(selector);
}


// 初始化
function init() {
    time = 1;
    rectArr = createRect(size);
    draw();
    sort = bubbleSort(rectArr);
}

function start() {
    itl = setInterval(() => {
        sort.next();
        time++;
    }, time * speed * 30)
}

function pause() {
    clearInterval(itl);
    time = 1;
}

function single() {
    pause();
    sort.next();
    time++;
}

function restart() {
    itl = setInterval(() => {
        sort.next();
        time++;
    }, time * speed * 30)
}
function createRect(size) {
    const result = [];
    let width = canvas.width / size;
    for(let i = 0; i < size; i++) {
        result.push(new Rect(i, width));
    }
    return result;
}

function Rect(i, width) {
    this.value = Math.floor(Math.random()*100);
    this.height = canvas.height * this.value / 100;
    this.width = width;
    this.x = i * width;
    this.y = canvas.height - this.height;
    this.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}

function exchange(array,i,j) {           
    [array[i], array[j]] = [array[j], array[i]];
}

function draw() {
    for (let i = 0; i < rectArr.length; i++) {
        context.fillStyle = rectArr[i].color;
        context.fillRect(rectArr[i].x, rectArr[i].y, rectArr[i].width, rectArr[i].height);
        context.font = "bold 20px Arial"
        context.fillStyle = '#000';
        context.fillText(rectArr[i].value, rectArr[i].x + rectArr[i].width / 3, rectArr[i].y);
    }
}

function move(array,i,j) {
    let x = array[j].x - array[i].x,
        dx = x / 20;
    let timer = setInterval(()=>{
        if(array[i].x - array[j].x > x) {
            exchange(array,i,j);
            clearInterval(timer);
        }
        else {
            context.clearRect(0, 0, canvas.width, canvas.height);
            array[j].x -= dx;
            array[i].x += dx;
            draw();
        }
    },speed);
}

// 节流处理
function throttle(func, wait, options) {
    var context, args, result;
    var timeout = null;

    var previous = 0;

    if (!options) options = {};

    var later = function () {
        previous = options.leading === false ? 0 : Date.now();

        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function () {
        var now = Date.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;

        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};
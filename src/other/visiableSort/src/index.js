const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
canvas.width = document.documentElement.clientWidth / 2;
canvas.height = document.documentElement.clientHeight / 2;


let time = 1, speed = 12, size = 10;
let rectArr = createRect(size);
draw();
sort = bubbleSort(rectArr);
sort.next();

setInterval(() => {
    sort.next();
    time++;
}, time * speed * 30)

function createRect(size) {
    const result = [];
    let width = canvas.width / size;
    for(let i = 0; i < size; i++) {
        result.push(new Rect(i, size, width));
    }
    return result;
}

function Rect(i, size, width) {
    this.value = Math.floor(Math.random()*100);
    this.height = canvas.height * this.value / 100;
    this.width = width;
    this.x = i * width;
    this.y = canvas.height - this.height;
    this.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}

function* bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if(array[j].value > array[j+1].value) {
                yield move(array,j,j+1);
            }
        }
    }
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
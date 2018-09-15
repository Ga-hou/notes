import SqList from './SqList';

let L: SqList = new SqList(10);
L.insert(0, 'a');
L.insert(1, 'z');
L.insert(2, 'd');
L.insert(3, 'm');
L.insert(4, 'z');

let order: number = L.indexOf('v');

if(order !== -1) {
    console.log('Z的位置为'+order);
}
else {
    console.log('Z不存在')
}
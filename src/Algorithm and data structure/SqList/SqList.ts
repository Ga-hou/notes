import IList from './IList';

export default class SqList implements IList {
    listElem: Array<any>;
    curLen: number;

    constructor(maxSize: number) {
        this.curLen = 0;
        this.listElem = new Array(maxSize);
    }

    clear() {
        this.curLen = 0;
    }

    isEmpty() {
        return this.curLen === 0;
    }

    length() {
        return this.curLen;
    }

    get(i: number) {
        if(i < 0 || i > this.curLen - 1){
            throw "第"+i+"个元素不存在";
        }
        return this.listElem[i];
    }

    insert(i: number, x: any) {
        if(this.curLen == this.listElem.length) {
            throw "顺序表已满";
        }

        if(i < 0 || i > this.curLen) {
            throw "插入位置不合法";
        }
        for(let j = this.curLen; j > i; j--){
            this.listElem[j] = this.listElem[j-1];
        }
        this.listElem[i] = x;
        this.curLen++;
    }

    remove(i: number) {
        if(i < 0 || i > this.curLen) {
            throw "删除位置不合法";
        }
        for(let j = i; j < this.curLen-1; j++) {
            this.listElem[j] = this.listElem[j+1];
        }
        this.curLen--;
    }

    indexOf(x: any) {
        let j: number = 0;
        while(j < this.curLen && !(this.listElem[j] === x)) {
            j++;
        }
        if(j < this.curLen) {
            return j;
        }
        else {
            return -1;
        }
    }

    display() {
        for(let i = 0; i < this.curLen; i++){
            console.log(this.listElem[i]);
        }
    }
}
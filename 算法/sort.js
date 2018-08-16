function ArrayList(){
    let array = [];

    var swap = function(array, index1, index2){
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    }
    this.insert = function(item){
        array.push(item);
    };

    this.toString = function(){
        return array.join();
    };

    //冒泡排序
    //优化版
    //冒泡是先排大的
    this.bubbleSort = function(){
        let length = array.length;

        for(let i = 0; i < length; i ++){
            //-i是为了不比较已经排好了的数值
            for(let j = 0; j < length - 1 - i; j ++){
                if(array[j] > array[j+1]){
                    swap(array,j,j+1);
                }
            }
        }
    };

    //选择排序
    //选择先排小的
    this.selectSort = function(){
        let length = array.length,
            indexMin;

        for(let i = 0; i < length -1; i++){
            indexMin = i;
            for(let j = i; j < length; j++){
                if(array[indexMin] > array[j]){
                    indexMin = j;
                }
            }
            if(i !== indexMin){
                swap(array,i,indexMin);
            }
        }
    };
    //插入排序
    //找出插入点
    this.insertionSort = function(){
        let length = array.length,
            j, temp;
        for(let i = 1; i < length; i++){
            j = i;
            temp = array[i];
            while( j > 0 && array[j-1] > temp){
                array[j] = array[j-1];
                j--;
            }
            array[j] = temp;
        }
    };

    //归并排序
    this.mergeSort = function(){
        array = mergeSortRec(array);
    }

    let mergeSortRec = function(array){
        let length = array.length;
        if(length === 1){
            return array;
        }

        let mid = Math.floor(length / 2),
            left = array.slice(0, mid);
            right = array.slice(mid, length);
        return merge(mergeSortRec(left),mergeSortRec(right));
    }

    let merge = function(left,right){
        let result = [],
            il = 0,
            ir = 0;
        while(il < left.length && ir < right.length){
            if(left[il] < right[ir]){
                result.push(left[il++]);
            }
            else{
                result.push(right[ir++]);
            }
        }
        while(il < left.length){
            result.push(left[il++]);
        }
        while(ir < right.length){
            result.push(right[ir++]);
        }

        return result;
    }

    //快速排序
    this.quickSort = function(){
        quick(array, 0, array.length - 1);
    }
    let quick = function(array, left, right){
        let index;

        if(array.length > 1){
            index = partition(array, left, right);

            if(left < index - 1){
                quick(array, left, index - 1);
            }
            if(index < right){
                quick(array, index, right);
            }
        }
    }

    //划分过程
    let partition = function(array, left, right){
        let pivot = array[Math.floor((right + left) / 2)],
            i = left,
            j = right;
        
        //划分界限
        while(i <= j){
            while(array[i] < pivot){
                i++;
            }
            while(array[j] > pivot){
                j--;
            }
            if(i <= j){
                swap(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    }
}


function createNonSortedArray(size){
    let array = new ArrayList();
    for(let i = size; i > 0; i--){
        array.insert(Math.floor(Math.random()*100));
    }
    return array;
}

let array = createNonSortedArray(10);
console.log(array.toString());
array.quickSort()
console.log(array.toString());

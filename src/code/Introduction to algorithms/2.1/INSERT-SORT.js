function insertSort(A) {
    for(let i = 1; i < A.length; i++) {
        let key = A[i];
        let j = i - 1;
        while(j >= 0 && A[j] > key) {
            A[j+1] = A[j];
            j--;
        }
        A[j+1] = key;
    }
}

function createArr(size){
    let arr = [];
    for(let i = 0; i < size; i++){
        arr[i] = Math.floor(Math.random()*100):
    }
    return arr;
}

let arr = [];
arr = createArr(20);
console.log(arr);
insertSort(arr);
console.log(arr);
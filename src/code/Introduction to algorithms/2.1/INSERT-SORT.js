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

var A = [2,3,1,4,6,1,2,5,3,4];
insertSort(A);
console.log(A);
function sum1(arr,size){
    return (
        size < 1 
        ? 0 
        : sum(arr,size-1) + arr[size-1]
    )
}
function sum2(arr,low,high){
    if(low === high){
        return arr[low];
    }
    let mid = Math.floor((low+high) / 2);
    return sum(arr,low,mid) + sum(arr,mid+1,high);
}
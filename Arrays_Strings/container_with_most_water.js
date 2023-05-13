const container = (arr) => {
    var start=0;
    var end = arr.length-1;
    var max_area = 0;
    while(start<=end){
        let min = Math.min(arr[start], arr[end]);
        let area = (end-start) * min;
        max_area = Math.max(max_area,area);
        if(min === arr[start]){
            start++;
        }
        else end--;
    }
    return max_area;
}

console.log(container([1,5,4,3]));
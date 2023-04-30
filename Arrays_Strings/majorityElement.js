const majorityElement = (arr) => {
    let cand = findCandidate(arr);
    let isMajor = isMajorityElement(cand, arr);
    if(isMajor) return cand;
}
//moore's voting alogo
//increase count when same number , decrease when you find diff
//if count gets 0, then that cannot be a candidate
findCandidate = (arr) => {
    let count = 1;
    let mindex=0;;
    for(let i=0;i<arr.length;i++){
        if(arr[mindex]== arr[i]){
            count++;
        }
        else count--;
        if(count === 0){
            mindex = i;
            count=1;
        }
    }
    return arr[mindex];
    
}

isMajorityElement = (cand,arr) => {
    let l = parseInt(arr.length/2);
    let c=0;
    for(let j=0;j<arr.length;j++){
        if(arr[j] === cand){
            c++;
            if(c > l){
                return true;
            }
        }
    }
    return false;
}
console.log(majorityElement([2,2,1,1,1,2,2]))
const squareSorted = (nums)=>{
    let newArr = new Array(nums.length);
    let i =0;
    let j = nums.length-1;
    let idx = j;
    while(idx>=0){
        if(Math.abs(nums[i]) < Math.abs(nums[j])){
            newArr[idx] = Math.pow(nums[j],2);
            j--;
        }
        else if(Math.abs(nums[i]) >= Math.abs(nums[j])){
            newArr[idx] = Math.pow(nums[i],2);
            i++;
        }
        idx--;
    }
    return newArr;
}
console.log(squareSorted([-4,-1,0,3,10]));
console.log(squareSorted([-7,-3,2,3,11]));
const singleNumber = (nums) => {
    let xnums = 0;
    if(nums.length === 1){
        return nums[0];
    }
    for(let i=0;i<nums.length;i++){
        xnums= xnums^nums[i];
    }
    return xnums;
}// will only work for twice repeated
console.log(singleNumber([2,2,1, 4, 3, 4, 3, 1, 5]));
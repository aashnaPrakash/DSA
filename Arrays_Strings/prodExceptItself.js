var productExceptSelf = function(nums) {
    let resArray;
    let noOfZeroes = nums.filter(i=> i==0).length;
    if(noOfZeroes > 1){
        resArray = new Array(nums.length).fill(0);
    }
    else if(noOfZeroes === 1){
        let prod = 1;
        resArray = new Array(nums.length).fill(0);
        let indexOfZero = nums.indexOf(0);
        for(let i=0;i<nums.length;i++){
            if(i != indexOfZero){
                prod = prod*nums[i];
            }
        }
        resArray[indexOfZero] = prod;
    }
    else {
        let prod = nums.reduce((item, prod) => prod = prod*item);
        resArray = nums.map(i => prod* Math.pow(i, -1));
    }
    return resArray;
};
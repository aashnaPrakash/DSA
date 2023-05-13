var runningSum = function(nums) {
    let res = [];
    res.push(nums[0]);
    for(let i=1;i<nums.length;i++){
        res[i] = res[i-1]+nums[i];
    }
    return res;
};
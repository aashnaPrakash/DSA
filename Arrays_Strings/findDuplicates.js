/*Given an integer array nums of length n where all the integers of nums are in the range
 [1, n] and each integer appears once or twice, 
 return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.*/

const findDuplicates = (nums) => {
    let n = nums.length;
    let resArray = [];
    if(nums.length === 0 || nums.length === 1) resArray = [-1];
    if(nums.length === 2){
        if(nums[0] === nums[1]) resArray=[nums[0]]
        else resArray = [-1];
    }
    else {
        for(let i=0;i<n;i++){
            let indexToUpdate = parseInt(nums[i]%n);
            nums[indexToUpdate] += n;
        }
        for(let j=0;j<n;j++){
            if(nums[j] >= n*2){
                resArray.push(j);
            }
        }
    }
    
    return resArray;
}

console.log(findDuplicates([4,3,2,7,8,2,3,1]));
console.log(findDuplicates([1,1,2]));
console.log(findDuplicates([2,2]));
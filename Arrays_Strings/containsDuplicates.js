/*Given an integer array nums, 
return true if any value appears at least twice in the array, 
and return false if every element is distinct.*/
const conatinDuplicates = (nums) => {
    let freqMap = {};
    for(let i=0;i<nums.length;i++){
        if(freqMap[nums[i]]){
            return true;
        }
        else freqMap[nums[i]]=1;
    }
    return false;
}
console.log(conatinDuplicates([1,2,3,1]));
var moveZeroes = function(nums) {
    let count =0;
   for(let i=0; i< nums.length;i++){
    if(nums[i] === 0){
       count++ ;
    } else { 
      [nums[i-count], nums[i]] = [nums[i], nums[i-count]] 
    }
   }
     return nums;
 };
 
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;
    let current = 0;
    let right = nums.length - 1;
    while( current <= right ){
        if(nums[current] === 0){
            swap(nums, left, current);
            left++;
            current++;
        }else if (nums[current] === 2){
            swap(nums, current, right);
            right--;
        }else{
            current++;
        }
    }
}
    
let swap = function(nums, left, current){
    let temp = nums[left];
    nums[left] = nums[current];
    nums[current] = temp;
}
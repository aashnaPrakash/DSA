/*Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.*/
const missing_number = (nums) => {
        let len = nums.length;
         let new_arr = [...Array(len+1).fill(-1)];
        for(let i=0;i<len;i++){
            new_arr[nums[i]] = 1;
        }
    
        let m= new_arr.findIndex(a=> a!=1);
        return m;
    };
console.log(missing_number([0]));
//see for corner caseslike [0,1], [0] etc
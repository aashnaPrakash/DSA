// Given a non-negative number represented as a list of digits, add 1 to the number 
// (increment the number represented by the digits). 
// The digits are stored such that the most significant digit is first element of array.
const plus_one = (number_arr) => {
    let add = 1;
    let carry = 0;
    let i = number_arr.length-1;
    while(i>=0){
        let res = number_arr[i]+add+carry;
        carry = res>9?1:0;
        number_arr[i] = res%10;
        i--;
        add = 0;
    }
    if(carry){
        number_arr.unshift(carry);
    }
    return number_arr;
}

console.log(plus_one([1,2,9]));
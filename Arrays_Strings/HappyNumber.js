/*Write an algorithm to determine if a number 
�
n
 is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 
1
1
 (where it will stay), or it loops endlessly in a cycle which does not include 
1
1
.
Those numbers for which this process ends in 
1
1
 are happy.
Return TRUE if 
�
n
 is a happy number, and FALSE if not.
 */
const happyNumber = (num) => {
    var fast; 
    if(num%10 === num) 
        num = num*num;
    let slow = num;
    fast = sumOfDigits(num);
    while(fast != 1 && fast != slow){
        slow = fast;
        let a = sumOfDigits(fast);
        fast = sumOfDigits(a);
    }
    if(fast === 1) return true;
    else return false;
}

const sumOfDigits = (num) => {
    let s = ''+num;
    let n = s.split('').map(a => parseInt(a));
    let ns = n.reduce(func, 0);
    return parseInt(ns);
}

const func = (sum, a) => {
    return sum+a*a;
}

//better solution with memo
var isHappy = function(n) {
    const squares = {
        '0':0, '1':1, '2':4, '3':9, '4':16, 
        '5':25, '6':36, '7':49, '8':64, '9':81
    };
    const memo = new Map();
    let temp = n;
    while(!memo.get(temp)) {
        temp = temp.toString().split('').reduce((acc, i) => {
            acc += squares[i];
            return acc;
        }, 0);
        if(!memo.has(temp)) memo.set(temp, false)
        else return false;
        if(temp === 1) return true;
    }
};


console.log(happyNumber(226));
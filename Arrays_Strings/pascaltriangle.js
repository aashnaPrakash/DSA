/*Given an integer numRows, return the first numRows of Pascal's triangle.

*/
const pascalTriangle = (numRows) => {
    let i=1;
    let final_arr = [];
    var memo = {};
    while(i<=numRows){
        let sub = PT(i, memo);
        memo[i] = sub;
        final_arr.push(sub);
        i++;
    }
    return final_arr;
}
const PT = (n,memo) => {
    if(n==1) return [1];
    else if (n==2) return [1,1];
    else {
        let new_arr = new Array(n).fill(1);
        for(let j=1;j<n-1;j++){
            let a;
            if(memo[n-1]){
                a = memo[n-1];
            }
            else a =PT(n-1);
            new_arr[j] = a[j]+ a[j-1];
        }
        return new_arr;
    }
}
console.log(pascalTriangle(5));
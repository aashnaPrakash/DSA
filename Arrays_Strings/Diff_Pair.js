/* find set of pairs having difference k in araay of distinct integers
*/
const Diff_Pairs = (arr,n) => {
   //1. run loops for each number and check O(n*n)
   //2. sort the array and do binary search at each element for x+k and x-k O(N log N)
   //3. use hash table
   let par_diff_map = {};
   let final_arr = [];
   for(let i=0;i<arr.length;i++){
       par_diff_map[arr[i]] = arr[i]+n;
   }
   for(let i=0;i<arr.length;i++){
        if(par_diff_map.hasOwnProperty(n+arr[i])){
            final_arr.push([arr[i],n+arr[i]])
        }
   }
   return final_arr;
    
}

function compareNumbers(a, b) {
    return a - b;
  }
const Diff_Pairs_usingSort = (arr, n) => {
    arr.sort(compareNumbers);
    let final_arr1 = [];
    let end = arr.length;
    let i = 0,j=1;
    while(i<end && j <end){ 
        if(i!=j && arr[j] - arr[i] === n){
            final_arr1.push([arr[i], arr[j]]);
            i++;
            j++;
        }
        else if(arr[j]-arr[i] < n){
            j = j+1;
        }
        else i = i+1;
        
    }
    return final_arr1;
}
console.log(Diff_Pairs([1,7,5,9,2,12,3],2));
console.log(Diff_Pairs_usingSort([1,7,5,9,2,12,3],2));
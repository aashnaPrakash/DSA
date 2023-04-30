/** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

One way to solev is by sorting and then using two pointers technique but depending on sorting technique time taken could be large , O(1) space for heap sort and 0(n) for merge sort
for merge sort or heap sort it would be nlog n
for the algo below, it is O(n) time and space )(n)
*/

const twoSum = (arr, target) => {
    let valmap = {};
    for(let i=0;i<arr.length;i++){
        let tmp = target - arr[i];
        if(valmap[tmp]!=undefined){
            return [i,arr.indexOf(tmp)];
        }
        else valmap[arr[i]] = tmp;
    }
    return [];
}

console.log(twoSum([0,4,3,0],0));
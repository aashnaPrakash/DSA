/*Given two integer arrays nums1 and nums2, 
return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays 
and you may return the result in any order.*/
const intersection = (arr1,arr2) =>{
    let small = arr1.length<arr2.length?arr1.length:arr2.length;
    let intersect = new Array(small);
    
}
console.log(intersection([4,9,5],[9,4,9,8,4]));
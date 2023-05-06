/*Given two integer arrays nums1 and nums2, 
return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays 
and you may return the result in any order.*/

var intersection = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let result = []; //if asked for unique elements just use set instead of array
    nums1 = nums1.sort();
    nums2 = nums2.sort();
    let [m,n] = len1>len2?[len2,len1]:[len1, len2];
    let i=0, j=0;
    while(i<m && j<n){
        if(nums1[i]> nums2[j]){
           j++;
        }
        else if(nums2[j]>nums1[i]){
            i++;
        }
        else {
            result.push(nums1[i]);
            i++;
            j++;
        }
    }
    return result;
};
console.log(intersection([4,9,5],[9,4,9,8,4]));
console.log(intersection([2,2],[1,2,2,1]));
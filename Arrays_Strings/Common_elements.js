/*given two sorted arrys with distinct elements, find common elements*/
const find_common = (arr1, arr2) => {
    let i=0,j=0;
    let comm_elements = 0;
    let len = arr1.length;//both arrays have same length
    while(i<len && j<len){
        if(arr2[j] === arr1[i]){
            comm_elements++;
            i++;
            j++;
        }
        else if(arr2[j]>arr1[i]){
            i=i+1;
        }
        else j++;
    }
    return comm_elements;
}
console.log(find_common([1,2,3,4,8,33,56],[3,6,8,33,89,100]));
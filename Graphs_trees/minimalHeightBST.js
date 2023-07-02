const minimalHeightBST = (array) => {
    return MHBST(array, 0, array.length-1);
}

const MHBST = (arr, start,end) => {
    if(end< start) return null;
    let mid = Math.floor((start+end)/2);
    let newNode = new TreeNode(arr[mid]);
    newNode.left = MHBST(arr,0, mid);
    newNode.right = MHBST(arr,mid+1,end);
    return newNode;
}
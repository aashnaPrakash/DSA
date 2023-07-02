const checkBalanced = (root) => {
    if(root === null) return true;
    let heightDiff = getHeight(root.left) - getHeight(root.right);
    if(Math.abs(heightDiff)>1){
        return false;
    }
    else return checkBalanced(root.left) && checkBalanced(root.right);
}

const getHeight = (node) => {
    if(node === null) return -1;
    return Math.max(getHeight(node.left), getHeight(node.right))+1;
}
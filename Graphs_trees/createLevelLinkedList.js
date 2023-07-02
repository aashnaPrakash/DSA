const CLLL  = (array) => {
    let arr = [];
    var current = new LinkedList();
    current.add(array[0]);
    while(current.getsize() >0){
        arr.push(current);
        let parents = current;
        current = new LinkedList();
        for(parent in parents){
            //let i: TreeNode = parent as TreeNode;
            if(i.left != null){
                current.add(i.left);
            }
            if(i.right != null){
                current.add(i.right);
            }
        }

    }
    return arr;
}
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let n = new Node(data);
        if (this.root === null) this.root = n;
        else {
            this.insertNewNode(n, this.root);
        }
    }
    insertNewNode(n, r) {
        if (n.data < r.data) {
            if (r.left === null) {
                r.left = n;
            }
            else this.insertNewNode(n, r.left);
        }
        else if (n.data >= r.data) {
            if (r.right === null) {
                r.right = n;
            }
            else this.insertNewNode(n, r.right);
        }
    }
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node === null) return null;
        else {
            if (data < node.data) {
                //move to left
                node.left = this.removeNode(node.left, data);
                return node;
            }
            else if (data > node.data) {
                //move to right subtree
                node.right = this.removeNode(node.right, data);
                return node;
            }
            else {
                //same value
                if (node.left === null && node.right === null) {
                    node = null;
                    return node;
                }
                else if (node.left === null) {
                    node = node.right;
                    return node;
                }
                else if (node.right === null) {
                    node = node.left;
                    return node;
                }
                else {
                    let minNode = this.findMinNode(node.right);
                    node.data = minNode.data;
                    node.right = this.removeNode(node, minNode.data);
                    return node;
                }
            }
        }
    }

    findMinNode(node) {
        // if left of a node is null
        // then it must be minimum node
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    getRootNode() {
        return this.root;
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.inorder(node.left);
            this.inorder(node.right);
        }
    }
}




const main = () => {
    let myBST = new BST();
    myBST.insert(2);
    myBST.insert(4);
    myBST.insert(1);
    myBST.inorder(myBST.getRootNode());
    myBST.preorder(myBST.getRootNode());
}

main();


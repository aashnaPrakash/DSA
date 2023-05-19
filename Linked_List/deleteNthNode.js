import { LinkedList, Node} from "./SLL.js";

const deleteNthNode = (head,n)=>{
    let node = nthToLast(head,n);
    deleteNode(node);
}

const deleteNode = (node) => {
    //let copy = new Node();
    let nextNodeData = node.next.data;
    // copy.data = nextNodeData;
    node.data = nextNodeData;
    node.next = node.next.next;
}

const nthToLast = (head,n) => {
    let p1 = head;
    let p2 = head;
    let i = 1;
    while(i<n){
        p1 = p1.next;
        i++;
    }
    while(p1.next != null){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
}

const main1 = () => {
    let sll = new LinkedList();
    sll.addToFront(2);
    sll.addToFront(3);
    sll.addToFront(4);
    sll.addToFront(2);
    sll.addToFront(2);
    sll.addToFront(9);
    sll.addToFront(2);
    sll.printNodes();
    deleteNthNode(sll.getHead(),3);
    sll.printNodes();
}

main1();
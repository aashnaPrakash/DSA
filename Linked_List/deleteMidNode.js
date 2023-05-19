
import {LinkedList, Node} from './SLL.js';

const deleteMidNode = (node) => {
    if(node.next == null || node == null) return false;
    let copiednode = new Node(node.next.data);
    let nextData = copiednode.data;
    node.data = nextData;
    node.next = copiednode.next;
   return true;
}

const main1 = () => {
let sll= new LinkedList();
sll.addToFront(2);
sll.addToFront(3);
sll.addToFront(4);
sll.printNodes();
console.log(deleteMidNode(node));
sll.printNodes();
}

main1();


import {LinkedList, Node} from './SLL.js';

const removeDups = (head) => {
   let hashMap = new Map();
   let current = head;
   let prev = null;
   while(current.next != null) {
        if(hashMap.has(current.data)){
            prev.next = current.next;
        }
        else {
            hashMap.set(current.data, current);
            prev = current;
        }
   }
}

const main1 = () => {
let sll= new LinkedList();
sll.addToFront(2);
sll.addToFront(3);
sll.addToFront(4);
sll.addToFront(2);
sll.addToFront(2);
sll.addToFront(9);
sll.addToFront(2);
var head = sll.getHead();
removeDups(head);
sll.printNodes();
}

main1();


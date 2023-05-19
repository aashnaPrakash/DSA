import { LinkedList, Node } from "./SLL.js";


const kthToLast = (head,k) => {
    let p1 = head;
    let p2 = head;
    for(let i=0;i<k;i++){
        if(p1 == null) return null;
        p1 = p1.next;
    }
    while(p1 != null){
        p1 = p1.next;
        p2 = p2.next;
    }

    return p2.data;
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
    console.log(kthToLast(head,3));
    }
    
    main1();
import { LinkedList, Node } from "./SLL.js";

const loopDetection = (ll) => {
    let i=ll.getHead();
    let j = i.next.next;
    while(i.data != j.data){
        i = i.next;
        j = j.next.next;
    }
    return i.data;
}

const main1 = () => {
    let ll = new LinkedList();
    ll.addToEnd('A');
    ll.addToEnd('B');
    ll.addToEnd('C');
    ll.addToEnd('F');
    ll.addToEnd('D');
    ll.addToEnd('E');
    ll.addToEnd('F');
    ll.printNodes();
    ll.makeloop(ll.getHead(),4);
    console.log(loopDetection(ll));
};
main1();
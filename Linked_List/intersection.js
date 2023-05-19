import { LinkedList, Node } from "./SLL.js";
const intersection = (ll1, ll2)=>{
    //check if last node is same, if yes, they intersect otherwise they do not
    if(ll1.getTail() != ll2.getTail()){
        return null;
    }
    //if they are of same size, then loop till they point to same node
    let s1 = ll1.getSize();
    let s2 = ll2.getSize();
    if(s1 === s2){
        let c1 = ll1.getHead();
        let c2 = ll2.getHead();
        while(c1.next != c2.next){
            c1 = c1.next;
            c2 = c2.next;
        }
        return c1.next.data;
    }
    //if not of same size find the diff between the sizes and do not consider the first k nodes
    else {
        let shorter = s1 > s2?ll2: ll1;
        let longer = s1 < s2?ll2: ll1;
        let diff = Math.abs(s1-s2);
        longer = findNode(longer, diff);
        shorter = shorter.getHead();
        while(shorter != longer){
            shorter = shorter.next;
            longer = longer.next;
        }
        return longer;
    }
   
}
const findNode = (longer, diff) => {
    let c = longer.getHead();
    while(diff>0 && c.next!= null){
        diff--;
        c = c.next;
    }
    return c;

}


const main1 = () => {
    let ll1 = new LinkedList();
    let ll2  = new LinkedList();
    let ll3  = new LinkedList();
    ll1.addToEnd(6);
    ll1.addToEnd(1);
    ll1.addToEnd(7);
    ll1.addToEnd(5);
    let tail1 = ll1.getTail();
   
    ll2.addToEnd(1);
    ll2.addToEnd(6);
    let tail2 = ll2.getTail();

    
    ll3.addToEnd(8);
    ll3.addToEnd(2);
    ll3.addToEnd(3);
    let head3 = ll3.getHead();
    tail1.next = head3;
    tail2.next = head3;
    ll1.printNodes();
    ll2.printNodes();
    console.log(intersection(ll1, ll2));
}

main1();

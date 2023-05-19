import { LinkedList, Node } from "./SLL.js";
const palindrome = (ll) => {
    let head = ll.getHead();
    let rll = new LinkedList();
    let current = head;
    while(current!=null){
        rll.addToFront(current.data);
        current = current.next;
    }
    var c1 = ll.getHead();
    var c2 = rll.getHead();

    while(c1!=null && c2!=null){
        if(c1.data != c2.data){
            return false;
        }
        c1 = c1.next;
        c2 = c2.next;
    }
    if(c1|| c2){
        return false;
    }
    else return true;
}


//see if you can use a stack
//reverse a linked list?
//if you have length, you can use recursion also, base case wiill be middle , then prev and next nodes to it 
const main1 = () => {
    let sll = new LinkedList();
    sll.addToFront(2);
    sll.addToFront(3);
    sll.addToFront(1);
    sll.addToFront(3);
    sll.addToFront(5);
    sll.addToFront(6);
    sll.printNodes();
    console.log(palindrome(sll));
}

main1();
import { LinkedList, Node } from "./SLL.js";
const sumLists = (num1, num2) => {
    var head1 = num1.getHead();
    var head2 = num2.getHead();
    var sum = new LinkedList();
    let carry = 0;
    var c1 = head1, c2 = head2;
    while(c1!=null && c2!=null){
        let sumData = c1.data+c2.data+carry;
        if(sumData>9){
            sum.addToEnd(sumData%10);
            carry = 1;
        }
        else {
            carry = 0;
            sum.addToEnd(sumData);
        }
        c1 = c1.next;
        c2 = c2.next;
    }
    if(carry){
        sum.addToEnd(carry);
    }
    sum.printNodes();
}


//see if you can use a stack
//reverse a linked list?
//if you have length, you can use recursion also, base case wiill be middle , then prev and next nodes to it 
const main1 = () => {
    let num1 = new LinkedList();
    let num2 = new LinkedList();
    num1.addToFront(6);
    num1.addToFront(1);
    num1.addToFront(7);
    num2.addToFront(8);
    num2.addToFront(8);
    num2.addToFront(9);
    sumLists(num1, num2);
}

main1();
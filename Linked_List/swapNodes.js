var swapNodes = function(head, k) {
    let p1 = head;;
    let p2 = head;
    let p3 = head;
    let c1 = 1;
    let c2 = 1;
    let n = 0;
    while(p1 != null){
        p1 = p1.next;
        n++;
    }
    let l = n-k+1;
    while(c1 !=k){
        p3 = p3.next; //at kth node
        c1++;
    }
     while(c2 !=l){
        p2 = p2.next; //at n-kth node
        c2++;
    }
    let temp = p3.val;
    p3.val = p2.val;
    p2.val = temp;
    return head;
    
};
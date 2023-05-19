export class LinkedList {
    constructor() {
        this.head = null;
    }
    main() {
        this.addToEnd(3);
        this.addToEnd(4);
        this.addToFront(2);
        this.addToEnd(9);
        this.printNodes();
        this.deleteLastNode();
        this.printNodes();
        this.deleteFirstNode();
        this.printNodes();
    }
    addToFront(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        return current;
    }

    addToEnd(data) {
        let node = new Node(data);
        var current = this.head;
        if (current == null) {
            this.head = node;
        }
        else {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }

    }

    deleteLastNode() {
        var current = this.head;
        let prev;
        while (current.next != null) {
            prev = current;
            current = current.next;

        }
        prev.next = null;
    }


    deleteFirstNode() {
        let current = this.head;
        this.head = current.next;
    }

    printNodes() {
        let current = this.head;
        let str = '';
        while (current != null) {
            str += current.data + "------->";
            current = current.next;
        }
        console.log(str);
    }

    getSize() {
        let current = this.head;
        if (current === null) return 0;
        let size = 1;
        while (current.next != null) {
            current = current.next;
            size++;
        }
        return size;
    }

    makeloop(head,k) {
    // traverse the linked list until loop
    // point not found
    var temp = head;
    var count = 1;
    while (count < k) {
        temp = temp.next;
        count++;
    }

    // backup the joint point
    var joint_point = temp;

    // traverse remaining nodes
    while (temp.next != null)
        temp = temp.next;

    // joint the last node to k-th element
    temp.next = joint_point;
}
}

export class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var sll = new LinkedList();
//sll.main();
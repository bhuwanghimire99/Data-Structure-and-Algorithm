class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0
    }

    insertAtFront(value) {
        // two cases : 1. list can be empty 2. list can have some elements

        const node = new Node(value)

        if (this.isEmpty()) {  // if list is empty
            this.head = node;
            this.tail = node
        }
        else {           // if list has some elements
            this.head.prev = node;
            node.next = this.head
            this.head = node;

        }
        this.size++

    }

    display() {
        if (this.isEmpty()) {
            console.log("list is empty!!")
        }
        else {
            let curr = this.head
            let elements = "";
            while (curr!==null) { // loops till last node or tail
                elements += `${curr.value}<-->`
                curr = curr.next
            }
            console.log(elements);
        }
    }
}


const list = new DoublyLinkedList();
list.display();
list.insertAtFront(15);
list.insertAtFront(10);
list.insertAtFront(5);
list.insertAtFront(1);
list.display();

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }

    isEmpty() {
        if (this.size == 0) {
            console.log("empty linked list")
        }
        else return false
    }
    getSize() {
        return this.size
    }

    insertAtBeginning() {
        const node = new Node(data) // Create a new node with the provided data
        if (this.isEmpty) {
            this.head = node
        }
        else {
            node.next = this.head, // Set the next of the new node to the current head of the list
                this.head = node // Update the head to be the new node, making it the first element
        }
        this.size++
    }
    display() {

        let current = this.head;  // Start from the head of the list

        while (current !== null) {  // Traverse the list and print each element's data
            console.log(current.data + " ");
            current = current.next;
        }
    }
}

// Create a new linked list
let linkedList = new LinkedList();

linkedList.insertAtBeginning(3);
linkedList.insertAtBeginning(7);
linkedList.insertAtBeginning(11);

// Display the elements of the linked list
linkedList.display();

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
       return this.size==0
    }
    getSize() {
        return this.size
    }

    insertAtBeginning(data) {
        const node = new Node(data) // Create a new node with the provided data
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            node.next = this.head // Set the next of the new node to the current head of the list
                this.head = node // Update the head to be the new node, making it the first element
        }
        this.size++
    }
    display() {

        let current = this.head;  // Start from the head of the list
      let listData= ''
        while (current!==null) {  // Traverse the list and print each element's data
           listData+= `${current.data} `
    
            current = current.next;
        }
        console.log(listData);
    }
}

// Create a new linked list
let linkedList = new LinkedList();

linkedList.insertAtBeginning(10);
linkedList.insertAtBeginning(20);
linkedList.insertAtBeginning(30);

// Display the elements of the linked list
linkedList.display();
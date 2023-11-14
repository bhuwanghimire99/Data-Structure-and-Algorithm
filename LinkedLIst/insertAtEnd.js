class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class insertAtEnd {
    constructor() {
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let prev = this.head
            while (prev.next) { // stopping before next node null 
                prev = prev.next
            }
            prev.next = node;
        }
        this.size++
    }

    display() {
        if (this.isEmpty()) {
            console.log("list is empty");
        }
        else {
            let curr = this.head;
            let list = ""
            while (curr) {
                list += `${curr.value}=>`
                curr = curr.next
            }
            console.log(list);
        }

    }
}

const linkedList = new insertAtEnd();
linkedList.isEmpty();
linkedList.append(5);
linkedList.append(10);
linkedList.append(15);
linkedList.append(20);
linkedList.display();

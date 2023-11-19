class Node{
    constructor(value){
     this.value=value;
     this.next=null;
     this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    isEmpty(){
        return this.size==0
    }

    // push method adds element from tail

    push(value){
        const node = new Node(value);
        if(this.isEmpty()){ // if list is empty
            this.head=node;
            this.tail=node
        }

        else{
            let temp = this.tail;
            this.tail=node;
            node.prev=temp;
            temp.next=node
        }
        this.size++
        return this;
    }
    display() {
        if (this.isEmpty()) {
            console.log("list is empty");
        }
        else {
            let curr = this.head;
            let list = ""
            while (curr) {
                list += `${curr.value}<-->`
                curr = curr.next
            }
            console.log(list);
        }

    }
}


const list = new DoublyLinkedList();
list.display();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.display();

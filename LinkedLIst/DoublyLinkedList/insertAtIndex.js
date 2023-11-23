class Node{
    constructor(value){
        this.value=value;
        this.prev=null;
        this.next=null;

    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    isEmpty(){
        return this.size==0;
    }

    insertAtBegin(value){
        const node=new Node(value);

        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }

    else{
        this.head.prev=node;
        node.next=this.head;
        this.head=node;
    }
    this.size++

    }

    insertAtEnd(value){
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

    insertAtIndex(value,index){

        
        if(index<0 || index>this.size){
            console.log(`please input valid index between : 0 and ${this.size}`);
            return;
        }
        const node = new Node(value)
        let current = this.head;
        let count = 0;

        if(index==0){
            this.insertAtBegin(value);
        }

        else if (index==this.size){

            this.insertAtEnd(value);
            //this.tail.next=node;
           // node.prev=this.tail;
            //this.tail=node;
        }

        else{
            while(count<index){
                current=current.next;
                count++
            }
            current.prev.next=node;
            node.prev=current.prev;
            node.next=current;
            current.prev=node;
            this.size++
        }
        
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

let list=new DoublyLinkedList();
list.insertAtIndex(10,0)
list.display()
list.insertAtIndex(15,1);
list.display()
list.insertAtIndex(20,2)
list.insertAtIndex(20,4)
list.display()
list.insertAtIndex(5,0);
list.display()
list.insertAtIndex(20,2);
list.display()
list.insertAtIndex(17,2);
list.insertAtIndex(13,4);

list.display();
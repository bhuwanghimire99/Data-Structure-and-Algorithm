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

    deleteAtIndex(index){

        if(index<0 || index>=this.size || this.size===0){
            console.log("please input valid index");
            return false;
        }


        let current = this.head;

        if(index===0){
            this.head=current.next;

            if(this.head){
                this.head.prev=null;
            }
            else{
                this.tail=null;
            }
            this.size--
        }

        else if(index===this.size-1){

            current=this.tail;
            this.tail=current.prev;
            this.tail.next=null;
            this.size--
        }

        else{

            let count=0;
            while(index>count)
            {
                current=current.next;
                count++
            }

            current.prev.next = current.next;
            current.next.prev=current.prev;
            this.size--
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
//list.deleteAtIndex(0);
//list.insertAtIndex(10,0)

list.deleteAtIndex(0)
list.insertAtIndex(15,0);

list.insertAtIndex(20,1);
list.insertAtIndex(25,2);
list.insertAtIndex(35,3);
list.display();

list.deleteAtIndex(2)
list.display();

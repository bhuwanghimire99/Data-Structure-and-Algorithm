class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class insertAtIndex {
    constructor() {
        this.size = 0;
        
    }

    isEmpty() {
        return this.size == 0
    }

    insert(value,index){ // method that takes value and index 

      if (index<0 || index>this.size) {
        console.log("please input valid index");
        
      }
      else if(index==0){
        const node = new Node(value) // creating a node with given value

        this.head=node
        this.size++
      }
      else{
        const node = new Node(value) // creating a node with given value

       let prev=this.head;
       for(let i=0;i<index-1;i++){ // index 2 given xa vane 1 ma stop hunx 1 prev , 2 prev.next
        prev = prev.next
       }
       node.next=prev.next; // index 2=prev.next , index1 = prev
       prev.next=node;
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
                list += `${curr.value}=>`
                curr = curr.next
            }
            console.log(list);
        }

    }
}

const linkedList =new insertAtIndex();
linkedList.insert(10,2);
linkedList.insert(10,0);
linkedList.insert(20,1);
linkedList.insert(30,2);
linkedList.insert(40,3);
linkedList.display();

linkedList.insert(35,3);
linkedList.insert(38,4);
linkedList.display();





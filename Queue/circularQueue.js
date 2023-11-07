/*
circular queue reuse the empty slot available after dequeue operartion 
initially :front = rear = -1
in circuar queue both rear and front are updated after enqueue and dequeue operation respectively.
front= (front +1)% size of queue
rear = (rear +1)% size of queue

enqueue() = adds element from rear end
dequeue()= removes element from front end
peek()= shows the oldest element from front pointer
isEmpty() = checks the queue is empty or not
length() = shows the number of data in queue
display()= prints the all data from queue
*/


class circuarQueue{
    constructor(size){
        this.items= new Array(size)
        this.size= size // size of queue
        this.rear=-1
        this.front=-1
    }

    isEmpty()
    {
       if (this.front==this.rear==-1){
        return true
    }
    else{
        return false
    }
}

  isFull(){
    return (this.rear+1)%this.size==this.front
  }


  enqueue(data){
    if(this.isEmpty()){  // checks queue is empty or not
    this.rear=0; // first insertion
    this.front=0;
    }
    if(this.isFull()){
        console.log("queue is full")
    }
    
    this.items[this.rear]= data
    this.rear=  (this.rear+1)%this.size

  }

  dequeue(){
    if(this.isEmpty()){
        console.log('queue is empty')
    }
    let removedData = this.items[this.front]
    this.front= (this.front+1)%this.size
    return removedData
  }

  peek(){
    if(!this.isEmpty()){
    return this.items[this.front]
    }
    return null
  }
  display(){
    
    if(this.isEmpty()){
        console.log('queue is empty');

    }else{
        let i
        let str=""
        for(i=this.front;i!==this.rear;i=(i+1)%this.size){
            str =str+this.items[i] + ""
        }
        str =str+this.items[i] + ""
    }
  }
}


const cqueue = new circuarQueue(5)

console.log(cqueue.isEmpty())
cqueue.enqueue(5);
cqueue.enqueue(6);
cqueue.enqueue(7);
cqueue.enqueue(8);
cqueue.enqueue(9);
  console.log(cqueue.isFull())
  console.log(cqueue.display());
  
  console.log(cqueue.dequeue())
  console.log(cqueue.dequeue())

  console.log(cqueue.display());

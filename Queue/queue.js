/*
enqueue() — Adds an element to the queue
dequeue() — Removes and returns the first item entered in the queue
isEmpty() — Returns true or false based on if the queue is empty or not
peek() — Returns the front element of the queue
print() — Returns all the elements of the queue
*/

class Queue {
    constructor() {
        this.queue = {}, // here object is used instead of array for better time complexity
            this.rear = 0,
            this.front = 0
    }

    enqueue(data) {
        this.queue[this.rear] = data;
        this.rear++;
    }
    dequeue() {
        
            let removedData = this.queue[this.front]
            delete this.queue[this.front]
            this.front++
            return removedData;
        
    }

    peek() {
        return this.queue[this.front]
    }

    isEmpty() {
        if (this.rear - this.front == 0) {
            return true
        }
        else {
            return false
        }
    }

    print() {
        console.log(this.queue)
    }
}

const qobj = new Queue
qobj.enqueue(5)
qobj.enqueue(6)
qobj.enqueue(7)

qobj.print();
console.log(qobj.dequeue());

console.log(qobj.peek());

console.log(qobj.isEmpty());
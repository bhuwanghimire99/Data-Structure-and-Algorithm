
let myStack= [] // empty stack

let pointer = myStack.length // number of data points top of stack
// initially pointer = 0 
const maxSize = 4;
function push(val){
    if(pointer<maxSize){
    myStack[pointer]= val;
    pointer++;
    
    }
    else{
        console.log("stack overflow");
    }
}

const pop =()=>{
    if(pointer>0){

    
   pointer = myStack.length-1 // currently mystack = 4
   myStack.length = pointer
   
    }
    else{
        console.log("stack underflow");
    }
}
push(20)
push(30)
push(20)
push(30)
pop();
pop();
pop();
pop();
pop()
console.log(myStack);
push(60)
console.log(myStack);
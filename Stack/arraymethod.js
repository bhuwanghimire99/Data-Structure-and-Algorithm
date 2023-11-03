let stack = [];

stack.push(30) // adds element on top of stack
stack.push('john')
stack.push(100)
console.log(stack.length) 
console.log(stack);

stack.pop() // removes element from top of stack
stack.pop()
console.log(stack);

stack.push(66)
stack.shift() //The shift() method removes the first element of an array (and "shifts" the other elements to the left)

console.log(stack);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

stack.unshift('ram')
console.log(stack);


/*
// Function to reverse string
function ReverseString(str) {
    return str.split('').reverse().join('')
}
 
// Function call
console.log(ReverseString("hello from nepal"))

 */

const string = (str)=>{
  let name = [];
  for(let i= 0; i<str.length;i++){
    name.push(str[i])  // push letter into stack
  }

  let reversedName = ''
  for(let i = str.length; i>0;i--){
    reversedName+=name.pop() // pop letter from the stack
  }
  return reversedName
}

console.log(string('Bhuwan Ghimire'))


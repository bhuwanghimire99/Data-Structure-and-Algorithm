/*
1. reverese the given string
2. convert this into postfix
3. reverse the postfix expression
4. finally you get prefix expression
*/

// function to reverse given string

const reverse = (str)=>{
    let name = [];
    for(let i= 0; i<str.length;i++){
      name.push(str[i])  // push letter into stack
    }
  
    let reversedString = ''
    for(let i = str.length; i>0;i--){
      reversedString+=name.pop() // pop letter from the stack
    }
    return reversedString
}


// to get precedence of operator
function getPrecedence(operator) {
    if (operator == '+' || operator == '-') {
       return 1;
    }
    else if (operator == '*' || operator == '/') {
       return 2;
    } else if(operator=='^'){
         return 3;
    }
    
    else {
       return 0;
    }
 }

 // Function to convert infix expression to postfix expression
function infixToPostfix(expression) {
   let result = ''; // Initialize an empty string to store the result
   const stack = []; // Initialize an empty array to simulate a stack
 
   for (let i = 0; i < expression.length; i++) { // Loop through each character of the infix expression
     let char = expression[i]; // Get the current character
 
     if (char.match(/[a-z0-9]/i)) { // If the character is an operand
       result += char; // Append it to the result string
     } else if (char === '(') { // If the character is an opening parenthesis
       stack.push(char); // Push it to the stack
     } else if (char === ')') { // If the character is a closing parenthesis
       while (stack.length && stack[stack.length - 1] !== '(') { // Pop and append operators from the stack until an opening parenthesis is found
         result += stack.pop();
       }
       stack.pop(); // Remove the opening parenthesis from the stack
     } else { // If the character is an operator
       while (stack.length && getPrecedence(char) <= getPrecedence(stack[stack.length - 1])) { // Pop and append operators from the stack while they have higher precedence
         result += stack.pop();
       }
       stack.push(char); // Push the current operator to the stack
     }
   }
 
   while (stack.length) { // Pop and append any remaining operators from the stack
     result += stack.pop();
   }
 
   return result; // Return the postfix expression
 }


 const expression = reverse('a+b*(c^d-e)^(f+g*h)-i'); // call reverse to reverse given string 

const postFixExpression = infixToPostfix(expression); // converting to postfix
                                                      
const infixToPrefix = reverse(postFixExpression);   // again call reverse function to get prefix expression 
                                              

console.log(infixToPrefix)




const balancedParanthesis =  (val) => {
// Create a stack
let item = []
// Loop through each element in the string
for (i = 0; i < val.length; i ++) {
}
let char = item[item.length-1]

// If you encounter a starting bracket, push it onto the stack 

if (val[i] == "(" || val[i] == "{" || val[i] =="[")
{
    stck.push(s[i])
}

// Pop the opening bracket off the stack,

// if there is a corresponding closing bracket in the string } else 
if ((char == "(" && s[i] == ")") || (char == "{" && s[i] "}") || (char =="[" && s[i]=="]")


 {
    stck.pop()
} else return false
// Check empty stack
return stck.length? false : true
}
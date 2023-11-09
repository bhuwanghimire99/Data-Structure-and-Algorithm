
const balancedParanthesis = (val) => {
    // Create a stack
    let item = []
    // Loop through each element in the string
    for (i = 0; i < val.length; i++) {



        let char = item[item.length - 1] // keeps data of top stack

        // If you encounter a starting bracket, push it onto the stack 

        if (val[i] == "(" || val[i] == "{" || val[i] == "[") {
            item.push(val[i])
        }

        // Pop the opening bracket off the stack,
        // if there is a corresponding closing bracket in the string
        else if ((char == "(" && val[i] == ")") || (char == "{" && val[i] == "}") || (char == "[" && val[i] == "]")) {
            item.pop()

        } else return false

    }
    // Check empty stack
    if (item.length == 0) return true
    else  return false
}

console.log(balancedParanthesis('({[}])')) // unbalanced
console.log(balancedParanthesis('({[]})')) // balanced
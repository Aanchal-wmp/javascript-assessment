//fucntion to change capitalization of string

function changeCapitalization(str) {
   if(typeof str === 'string') {
    let outputStr = '';

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        // If the character of the string is in uppercase, convert it to lowercase
        if (char === char.toUpperCase()) {
            outputStr += char.toLowerCase();
        }
        // Otherwise convert to uppercase
        else {
            outputStr += char.toUpperCase();
        }
    }

    return outputStr;
   }
   else {
    throw new Error("Input must be a string");
   }
}

const inputString = "JavaScript"

//calling the function changeCapitalization and console logging the output string
console.log("String after changing its capitalization: ", changeCapitalization(inputString));
//fucntion to clone an array 

function array_Clone(arr) {

    if (Array.isArray(arr)) {
        return [...arr];              //method 1 - using spread operator
        // return Array.from(arr);    method 2 - using Array.from
        // return arr.slice(0);       method 3- using slice
    }
    
   else {
    throw new Error("Input must be an array.");
   }
}

//calling the function with dummy array inputs
console.log(array_Clone([1, 2, 4, 0])); 
console.log(array_Clone([1, 2, [4, 0]])); 
//fucntion to clone an array 

function array_Clone(arr) {

    if (Array.isArray(arr)) {
        return [...arr]; //using spread..it makes shallow copy
    }
    
   else {
    throw new Error("Input must be an array.");
   }
}

//calling the function with dummy array inputs
console.log(array_Clone([1, 2, 4, 0])); 
console.log(array_Clone([1, 2, [4, 0]])); 
//function to remove duplicates from an array 

function removeDuplicates(arr) {
    if (Array.isArray(arr))
    {
        return [...new Set(arr)];
    }
    else {
        throw new Error("Input must be an array");
    }
}

const array = [1,2,2,4,5,7,7,10];

//calling the fucntion removeDuplicates and console logging the output
console.log("Array after removing duplicates: ",removeDuplicates(array));
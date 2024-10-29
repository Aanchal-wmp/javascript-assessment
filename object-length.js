
//dummy object
var user = {
    name: "Aanchal Saxena",
    designation: "Software Developer",
    age: 21
}

//function to find length of object
function objLength(obj) {

    if(typeof obj === 'object') {
        return Object.keys(obj).length;
    }
    else {
        throw new Error("Input must be an object");
    }
}

//calling the function objLength and console logging the output 
console.log("Length of object keys: ",objLength(user));
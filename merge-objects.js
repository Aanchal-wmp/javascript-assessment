//function to merge two objects

function mergeObjects(obj1, obj2) {
    if(typeof obj1 === 'object' && typeof obj2 === 'object') {
    
        const mergedObj = { ...obj1 }; 

    for (let key in obj2) {
        if (mergedObj.hasOwnProperty(key)) {

             // if key exists in both objs and value is also same then take only one pair
            if(mergedObj[key] === obj2[key])
            {
                continue;
            }
            // if key exists in both objs and value is different then combine the values into the merged object
           else {
            mergedObj[key] = [mergedObj[key], obj2[key]];
           }
        } else {
            mergedObj[key] = obj2[key];
        }
    }
    return mergedObj;

    }
    else {
        throw new Error("Input must be an object");
    }
}

const object1 = { a: 1, b: 2, c: 3 };
const object2 = { a: 1, b: 4, d: 5};

//calling the fuction mergeObjects to merge the two objects and console logging the new output object
console.log("Merged object = ", mergeObjects(object1, object2));
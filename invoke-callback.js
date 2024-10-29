//function to invoke callback
function invokeCallback(callback) {

    if (typeof callback === 'function') {

        //using setTimeout to cause the delay of 2 seconds
        setTimeout(() => {
            callback(); 
        }, 2000); 
    } else {
        console.error("The provided argument is not a function.");
    }
}

//callback function
function callback() {
    console.log("Hii I am a function invoked afer 2 seconds")
}

//calling the invokeCallback fucntion
invokeCallback(callback);
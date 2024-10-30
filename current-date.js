//function to find the current date
function getCurrentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() +1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

//calling the fucntion getCurrentdate and console logging it

console.log("Current Date in format 'day-month-year': ", getCurrentDate());
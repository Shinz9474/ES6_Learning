console.log("Script initiated.....") //Synchronous/blocking program
let time1 = 4000;
setTimeout(() => console.log(`Sorry, i was timed out for ${time1} millisecods`), time1) //Asynchronous/non-blocking program
const user = getUser(10);
console.log(user)
console.log("Script Complete.....")

function getUser(id){
    setTimeout(() => {
        console.log(`retrieved data from db for user ${id}`);
        return {id : id, name : 'Shinu'};
    }, 2000);
}
/*  ---OUTPUT---
Script initiated.....
undefined
Script Complete.....
retrieved data from db for user 10
Sorry, i was timed out for 4000 millisecods*/
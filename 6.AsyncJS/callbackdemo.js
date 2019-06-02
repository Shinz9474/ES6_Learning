console.log("Script initiated.....") 
getUser(10, (user)=>{console.log('User', user)
        getRepositories(user.name, (repos)=>console.log('repos', repos))}
);
console.log("Script Complete.....")

//------CALLBACKS------//
//For callbacks, we need to add another param to the function
function getUser(id, callback){
    setTimeout(() => {
        console.log(`\n-------------\nRetrieved data from db for user ${id}`);
        callback({id : id, name : 'Shinz9474'})
    }, 2000);
}
//When the result of an  asynchronous operation is ready, the callback function is executed
    // - The getUser() function takes in 2 arguments id, callback.
    // - The callback argument is basically the variable to which the callback function or implementation is passed to when calling getUser().
    // - callback then performs the operation over the user object returned in the getUser method

//------CALLBACKS HELL------//
function getRepositories(user, callback){
    setTimeout(() => {
        console.log(`\n-------------\nRetrieved repos for ${user}`);
        callback(['repo1','repo2','repo3','repo4'])
    },2000)
}

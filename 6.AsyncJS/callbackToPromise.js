//------RESOLVING CALLBACK HELL WITH PROMISES-----//
console.log("Script initiated.....") 
// getUser(10, (user)=>{
//     getRepositories(user.name, (repos)=>{
//         getCommits(repos, (commits)=>{
//             console.log('repos', repos)
//         })
//     })
// });
console.log("Script Complete.....")

getUser(10)
    .then(user => getRepositories(user.name))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log(commits))
    .catch(err => console.log('Error', err.message))//Single error handler to handle the error that come from any of the above asynchronous operations

function getUser(id){
    return new Promise((resolve, result) => {
        //Kick off some async work
        setTimeout(() => {
            console.log(`\n-------------\nRetrieved data from db for user ${id}`);
            resolve({id : id, name : 'Shinz9474'})
        }, 2000);
    })
    
}
function getRepositories(user){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`\n-------------\nRetrieved repos for ${user}`);
            resolve(['repo1','repo2','repo3','repo4'])
        },2000)
    })
}
function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`\n-------------\nRetrieved commits for ${repo}`)
            resolve(['commit0', 'commit1', 'commit2', 'commit3'])
        })
    })
}
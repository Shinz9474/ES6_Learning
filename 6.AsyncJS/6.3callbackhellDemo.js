console.log("Script initiated.....") 
//======Asynchronous========//
//------CALLBACKS HELL------// Nested callbacks. Also called CHRISTMAS TREE PROBLEM
getUser(10, (user)=>{
    getRepositories(user.name, (repos)=>{
        getCommits(repos, (commits)=>{
            console.log('repos', repos)
        })
    })
});
// Solution for "Callback hell", use named functions

console.log("Script Complete.....")

//======Synchronous========// Similar synchronous version of callback hell
const user = getUser(10);
const repo = getRepositories(user)
const commits = getCommits(repo)


function getUser(id, callback){
    setTimeout(() => {
        console.log(`\n-------------\nRetrieved data from db for user ${id}`);
        callback({id : id, name : 'Shinz9474'})
    }, 2000);
}
function getRepositories(user, callback){
    setTimeout(() => {
        console.log(`\n-------------\nRetrieved repos for ${user}`);
        callback(['repo1','repo2','repo3','repo4'])
    },2000)
}
function getCommits(repo, callback){
    setTimeout(()=>{
        console.log(`\n-------------\nRetrieved commits for ${repo}`)
        callback(['commit0', 'commit1', 'commit2', 'commit3'])
    })
}
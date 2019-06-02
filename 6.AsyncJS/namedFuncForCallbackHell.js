//namedFuncForCallbackHell.js
console.log("Script initiated.....") 

//------CALLBACKS HELL------// 
console.log("CALLBACKHELLLLL......")
getUser(10, (user)=>{
    console.log('User: ', user)
    getRepositories(user.name, (repos)=>{
        console.log('Repos:', repos)
        getCommits(repos[0], (commits)=>{
            console.log('Commits', commits)
        })
    })
});

//------CALLBACKS HELL HANDLED WITH NAMEDFUNCTIONS------// 
console.log("CALLBACKHELL Handled with named functions......")
getUser(10, displayUsers);

function displayUsers(user){
    console.log('User', user)
    getRepositories(user.name, displayRepos)//Providing reference of corresponding named functions
}
function displayRepos(repos){
    console.log('Repos', repos)
    getCommits(repos[0], displayCommits)//Providing reference of corresponding named functions
}
function displayCommits(commits){
    console.log('Commits', commits)
}

//-----ASYNCHRONUS FUNCTIONS-----//
function getUser(id, callback){
    setTimeout(() => {
        console.log(`\n---------------------------------------\nRetrieved data from db for user ${id}`);
        callback({id : id, name : 'Shinz9474'})
    }, 2000);
}
function getRepositories(user, callback){
    setTimeout(() => {
        console.log(`\n---------------------------------------\nRetrieved repos for ${user}`);
        callback(['repo1','repo2','repo3','repo4'])
    },2000)
}
function getCommits(repo, callback){
    setTimeout(()=>{
        console.log(`\n---------------------------------------\nRetrieved commits for ${repo}`)
        callback(['commit0', 'commit1', 'commit2', 'commit3'])
    })
}

console.log("All jobs triggered. Please wait untill reponse is complete") 
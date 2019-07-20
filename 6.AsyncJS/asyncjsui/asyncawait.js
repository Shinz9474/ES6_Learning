const testcases = [
    {title : "Smoke001", desc : "Smoke001_AdyenCC"},
    {title : "Smoke002", desc : "Smoke001_PaypalCheckout"}
]

function getTestCases() {
    setTimeout(()=>{
        console.log("waiting to get the TestCases")
        let output = ""
        testcases.forEach((tc)=>output += `<li>${tc.title} => ${tc.desc}</li>`);
        document.getElementById("testcases").innerHTML = output;
    }, 1000);
}

function createTestcases(testcase) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            testcases.push(testcase);
            console.log(`${testcase.title} is pushed`)
            const error = false;
            if(!error){
                resolve()
            } else {
                reject(new Error("Something went wrong"))
            }
        }, 2000)
    })
}

//ASYNC/AWAIT
async function init(){
    await createTestcases({title : "Smoke003", desc : "Smoke003_PaypalCredit"});
    getTestCases()
}
/*We are waiting for createTestcases to respond and then getTestCases*/

//ASYNC/AWAIT with FETCH
async function fetchUsers() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await res.json();
    let usersdisp = ""
    console.log(data.length,`${data[0].name} => ${data[0].username} => ${data[0].email}`)
    for(let i = 0; i<data.length; i++){
        usersdisp += (`<li>${data[i].name} => ${data[i].username} => ${data[i].email}</li>`)
    }
    document.getElementById("users").innerHTML = usersdisp
}
init()
fetchUsers()

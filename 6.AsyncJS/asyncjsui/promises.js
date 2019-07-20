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
    }, 2000);
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
        }, 1000)
    })
}


PROMISE
createTestcases({title : "Smoke003", desc : "Smoke003_PaypalCredit"})
    .then(getTestCases)
    .catch(err => console.log(err))
    
//PROMISE ALL
const promise1 = Promise.resolve("Hello World")
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
Promise.all([promise1, promise2, promise3, promise4]).then(value=> console.log(value))
// It takes as long as the longest promise takes to resolve
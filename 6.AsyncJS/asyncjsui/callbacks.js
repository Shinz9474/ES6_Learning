const testcases = [
    {title : "Smoke001", desc : "Smoke001_AdyenCC"},
    {title : "Smoke002", desc : "Smoke001_PaypalCheckout"}
]

function getTestCases() {
    setTimeout(()=>{
        console.log("waiting for getpost")
        let output = ""
        testcases.forEach((tc)=>output += `<li>${tc.title} => ${tc.desc}</li>`);
        document.getElementById("testcases").innerHTML = output;
    }, 1000);
}

/*function createTestcases(testcase) {
    setTimeout(()=>{
        testcases.push(testcase)
    }, 2000)
}*/

function createTestcases(testcase, callback) {
    setTimeout(()=>{
        testcases.push(testcase)
        callback()
    }, 2000)
}

createTestcases({title : "Smoke003", desc : "Smoke003_PaypalCredit"}, getTestCases)
/*createTestcases({title : "Smoke003", desc : "Smoke003_PaypalCredit"})
getTestCases()*/

//--CALLBACK NOTES--//
/*Assume that the createTestCase takes 2 seconds for the server response
but the getTestCase takes 1 second for server to respond
Hence, the dom will be loaded only with the initial 2 posts=>
Smoke001 => Smoke001_AdyenCC
Smoke002 => Smoke001_PaypalCheckout

This is why we go for callbacks
- We pass the callback param to the createTestCases function and when calling the function we pass getTestCase as a callback function
- Essentially saying to the createTestcases function, after you push the new tc, immediately call getTestCases [Callback getTestCases when tc is pushed]

Hence we get the below output after 3 seconds
Smoke001 => Smoke001_AdyenCC
Smoke002 => Smoke001_PaypalCheckout
Smoke003 => Smoke003_PaypalCredit
*/

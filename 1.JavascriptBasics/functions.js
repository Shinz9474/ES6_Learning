//--------FUNCTIONS---------//

//1. Function expression
function sayHello(msg){
    return "Hello "+ msg;
}

function getMessage(msg1, msg2) {
    return msg1 +" "+ msg2;
}

/*JS is flexible with args: 
    - if the no. of args sent is less than the defined, then the remaining args is taken as undefined
    - if the no. of args sent is more than the defined, then the extra args is not considered at all. JS throws no error
*/
//console.log(sayHello("Shinu"))
console.log(getMessage("Shinu"))//Shinu undefined
console.log(getMessage("Shinu", "Mathew"))//Shinu Mathew
console.log(getMessage("Priya", "Shinu", "Mathew"))//Priya Shinu

//OVERLOADED FUNCTIONS ARE NOT POSSIBLE IN JAVASCRIPT

const getmsg = function() {
    return ;
}
console.log(getmsg);//[Function: getmsg]
console.log(getmsg());//undefined


//2. Inline Function declaration
/*Functions in JS are First class values 
    => Functions are actually values in JS. similar to 4 or "Shinu"
*/
var a = "Hello"
//Similarly i can create a variable f and assigning the function to the variable
var f = function(){
    console.log(a)
} // function is assigned to f

f();//Hello
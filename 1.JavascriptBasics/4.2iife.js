/*It is not a good practise to create global variable in JS. Because,
    - In browser env, everything we load is in a single space. 
        A page links to multiple js files
        All these scripts execute in a common namespace.
        If one of the script uses global variable, that variable is available for all the scripts, and they can be tampered as well
    - The other reason is that, we dont want to pollute the global namespace.
        Clash variable with other scripts */

//For this, we can overcome this by creating a function to wrap these variables

//---****----IIFE----****---//
/*(function(){
    var name = "Shinu"
    var role = "SDET"
    console.log(`Hi!, this is is ${name}. He is an ${role}`)
})();*/

function myFunc(){
    var a = 10
    var b = 20
    console.log(a + b)
}

myFunc();
/*This kind of solves the problem while creating a new one.
    - We removed global variables a and b but created new global myFunc
*/  

//To overcome this, we go for IIFE[Immeditely Invoked Function Expression]
//Creating an anonymous function and calling it right away

(function(){
    var name = "Shinu"
    var role = "SDET"
    console.log(`Hi!, this is is ${name}. He is an ${role}`)
})();


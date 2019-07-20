//---------"this"--------//

    //----4 ways of calling a function----//

//1. Directly calling a function
function foo1(){
    console.log("Method 1");
    //console.log(this);// In this approache, the "this" referes to the Global object
}
foo1();
//========================================================================

//2. Calling function using object handler
var obj = {};
obj.foo2 = function(){
    console.log("Method 2")
    console.log(this);// In this approache, the "this" referes to the object whose property is being called
                        //=> { foo2: [Function] }
}
obj.foo2()
//========================================================================

//3. Using as a constructor. using "new"
function foo3(){
    console.log("Method 3");
    console.log(this);// In this approache, the "this" referes to the newly created object=> foo3 {}
}
new foo3()
//========================================================================

//---------EXECUTION CONTEXT-----//
function fooed(){
    console.log("Hello")
}

fooed()

//4. Using the call()
console.log("Using call property")
foo1.call()//Method 1
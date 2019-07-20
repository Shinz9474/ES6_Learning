function foo(){
    console.log("I am Foooooo..... ")
}
console.log(foo)    //[Function: foo]

var myFoo1 = new foo();
console.log(myFoo1) //foo {}

myFoo1.test1 = "This is test prop 1 on myobj1"
console.log(myFoo1) //foo { test1: 'This is test prop 1 on myobj1' }

myFoo1.__proto__.test2 = "Prototype test 2 property"
console.log(myFoo1.test2)   //Prototype test 2 property

myFoo1.test2 = "myFoo1 test 2 property"
console.log(myFoo1.test2)   //myFoo1 test 2 property


var myFoo2 = new foo()
console.log(myFoo2.test2)   //Prototype test 2 property

myFoo2.test2 = "myFoo2 test 2 property"
console.log(myFoo2.test2)   //myFoo2 test 2 property

delete myFoo2.test2
console.log("Test2 prop on myfoo2",myFoo2.test2)    //Prototype test 2 property
//--------OBJECTS IN JS------//

//1. Inline object creation
var myobj1 = {};//empty object
console.log("Object created, myobj:",myobj1)

myobj1.name = "Shinu"//Adding a property "name" dynamically
console.log("Name prop added, myobj:",myobj1)

myobj1.age = 27
console.log("Age prop added, myobj:",myobj1)
console.log("Age: ",myobj1.age)
console.log("isActive: ",myobj1.isactive)//undefined

//2. Object literal
var myobj2 = {
    "name": 'Priya',
    "age": 26,
    "isactive" : false,
    "1" : "Test"
}
console.log("Object created with Object literal, myobj2:",myobj2)

//Accesssing object properties using"[]"
console.log("Accesssing object properties using '[]'",myobj2["isactive"])
console.log(myobj2["1"]);

//---------NOTES---------//
//Objects in javascript behaves more like a map
//We can add thing and remove on fly

//No accessors like public, private, etc
//There are ways to make these properties private or public
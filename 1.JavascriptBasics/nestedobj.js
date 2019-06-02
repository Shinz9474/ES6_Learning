//-------NESTED OBJECTS: Object which is a property value in an object------//
let myobj1 = {
    "name" : "Shinu",
    "age" : 27,
    "attributes" : {
        "colour" : "brown",
        "hieght" : 172,
        "weight" : 70
    }
}
console.log(myobj1.attributes["colour"])
console.log(myobj1)
delete myobj1.attributes["colour"]
console.log(myobj1.attributes["colour"])
console.log(myobj1)
//----------OBJECTS------------//
/*Javascript does not have the feature of Classes. ES6 however has keyword "class" which gives a class like syntax but that doesnt give typical class features like in Java
This is achieved by prototype. Prototype gives the blueprint for an object.*/

//Objects are a collection of values

//1. Inline objects
var obj = {
    "name" : "objectdemo",
    "type" : "inline object"
}
    //Since it is not class based, the objects are free form and doesnt have a blueprint. Its like a map
obj.id = 1
console.log(obj)//{ name: 'objectdemo', type: 'inline object', id: 1 }
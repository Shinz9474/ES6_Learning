//------CREATING OBJECTS BASED ON BLUEPRINTS IN JS------//

function proto(){}
//console.log(proto.prototype)//proto {}

/*Every function in javascript is an object. Each function created, creates 2 objects. 
One of which is a prototype.
- This prototype object comes into play only if the function is call for creating an object using 'new'
*/

var protoObj = new proto()
//console.log(protoObj)
proto.prototype.test = "Shinu"
/*Now the prototype object gets busy.
- JS engine creates a property __proto__ for every object created using new.
- This property points to the prototype object of the proto()
*/
//console.log(protoObj.test)
//console.log(protoObj.__proto__.test)
/*When we look up for a property on an object. 
If the object did not have the property, it looks up in the prototype. 
If prototype object has it, then it returns the property as though it was available in the object*/

//WHY SO?
/*This is because if there are many objects created using the new, then all of them should have access to the member of the function used to create obj as a single copy*/

function Employee(name){
    this.name = name
}

var emp1 = new Employee("Shinu")
console.log("Employee1: ",emp1)
var emp2 = new Employee("Priya")
console.log("Employee2: ",emp2)
//To add a new property as a function, we can modify the constructor but this is not a good idea as it will create multiple copies of it
//So we can use the prototype of the function

Employee.prototype.playPranks = function(){console.log(`Prank played with ${this.name}`)}
Employee.prototype.playPranks()
emp1.playPranks()
emp2.playPranks()
//This way, the playprank property is available for all the objects though the object doesnot have the property as such
//It is through the prototype and because of teh prototype lookup that we are getting this property

var emp3 = new Employee("XXX")
emp3.playPranks()


//THIS IS DIFFERENT FROM A CLASS MODEL
// - Objects created from class, has its members created right in the begining
// - Whereas in prototypes, the properties can be changes at runtime
//---------this WITH OBJECTS------------//
//Constructor function
function CreateBicycle(name, topspeed, tyrepressure){
    this.name = name                //the this here references to the newly created object as it is inside the scope of the constructor function
    this.topspeed = topspeed
    this.tyrepressure = tyrepressure
    this.inflatetires = function(){
        this.tyrepressure += 3      //the this here references the object on which the function is called as it is inside the scope of the inner function inflatetires
    }
}

var bicycle1 = new CreateBicycle("TVS", 30, 48)
console.log("Before inflations",bicycle1)//{name: 'TVS', topspeed: 30, tyrepressure: 48, inflatetires: [Function] }
bicycle1.inflatetires()
console.log("After inflations",bicycle1)//{name: 'TVS', topspeed: 30, tyrepressure: 51, inflatetires: [Function] }

function Mechanic(name){
    this.name = name
}

var mike = new Mechanic("Mike")
//We need to provide Mike the access to inflatetires function access
mike.inflatetires = bicycle1.inflatetires
//mike.inflatetires()//Now, the inflatetires refers to the function in CreateBicycle which uses it tyrepressure property

//Hence, when calling that function for a separate type of object, it returns error as tyrepressure is not accessible for mike.
//Hence to make mike the access

//HENCE THE SOLUTION HERE IS TO USE CALL, which is a property on the function. A function in JS is an object
//Using call, we can pass the object to which we want the function to be called upon. 

mike.inflatetires.call(bicycle1) //Hence ,we are using the mike.inflatetires and use the call property over bicycle1 object
console.log(bicycle1)//{name: 'TVS', topspeed: 30, tyrepressure: 54, inflatetires: [Function] }

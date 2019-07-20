function Employee(name){
    this.name = name
  }

Employee.prototype.getName = function(){ return this.name }
var emp1 = new Employee("Tony")
console.log(emp1.getName())

function Manager(name, dept){
    this.name = name
    this.dept = dept
}

Manager.prototype.getDept = function(){ return this.dept }
var mng1 = new Manager("Steve", "Avengers")

/*
However, if we want to access mng1.getName, we cannot as it is not a property of the Manager function
One way to achieve this is to have the property in the Object's prototype object
But that means this property will be available for all the objects   

SOLUTION:
If we can change the dunder proto of Manager to point to the Employess prototype object instead of Object's Prototype
*/

console.log(Manager.__proto__.__proto__ === Object.prototype)   //true
//Hence change it to Employees prototype

mng1.__proto__.__proto__ = Employee.prototype
console.log(mng1.getName())
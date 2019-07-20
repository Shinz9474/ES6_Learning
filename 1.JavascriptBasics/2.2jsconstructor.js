//---------CONSTRUCTOR ORIGIN IN JS---------//
    //Without contructor syntax. Only as a function
function createNewEmployee(id, name, role){
    var employee = {};
    employee.id = id;
    employee.name = name;
    employee.role = role;
    return employee;
}

var newEmployee = createNewEmployee("ECE156", "Shinu", "ECE");
console.log(newEmployee);//{ id: 'ECE156', name: 'Shinu', role: 'ECE' }

    //With constructor syntax
function CreateEmployee(id, name, role){
    //var this = {}
    this.id = id;
    this.name = name;
    this.role = role;
    //return this;
}

var emp = new CreateEmployee(1, "Shinu", "SDET")
console.log(emp)//createNewEmployee { id: 1, name: 'Shinu', role: 'SDET' }


//---------SWITCHING FUNCTION TYPES AND CALLS--------//
var newEmp = new createNewEmployee(1, "Shinu", "SDET")//Calling a regualr function as a constructor works
console.log(newEmp)//{ id: 1, name: 'Shinu', role: 'SDET' }
var emp = CreateEmployee(2, "Shinu", "QA")//Calling a constructor function as a normal function, the "this" will referrence the global object
                                          // - Creates new properties to the global object. this.id => create a property id to global object
console.log(emp)//undefined
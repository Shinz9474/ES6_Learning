//-------MODULE PATTERN IN JS-------//

//Data hiding in Javascript- MAKING A PROPERTY PRIVATE USING getters and setters
/*function createPerson() {
    var personObj = {
        "firstname" : "Shinu",
        "lastname" : "Mathew",
        "getFirstName" : function(){
            return this.firstname
        },
        "getLastName" : function(){
            return this.lastname
        }
    }
    return personObj
};

var myobj = createPerson();
console.log(`FirstName from property: ${myobj.firstname}`)
console.log(`FirstName from property function: ${myobj.getFirstName()}`)
*/

function createPerson() {
    var firstname = "Shinu";
    var lastname = "Mathew"

    var personObj = {
        "getFirstName" : function(){
            return firstname
        },
        "getLastName" : function(){
            return lastname
        }
    }
return personObj;
}
var myobj = createPerson();
console.log(`FirstName from property: ${myobj.firstname}`)  //undefined
console.log(`FirstName from property function: ${myobj.getFirstName()}`)    //Shinu
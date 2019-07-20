/*In JS, scope is not created when using "{ }"
Ex:
*/

var name = "Shinu";
if(name === "Shinu"){
    var dept = "SDET"
}

console.log(name)   //Shinu
console.log(dept)   //SDET

//However, for the most part, scope is created when creating a function. There are other ways as well though

//JS is function scoped
function getDept(){
    var empDept = "DEV"
}

console.log(empDept)    //error
//--------FUNCTION AS OBJECT-------//
let name = "Shinu"
let getName = function(){
    return name+"1234"
}
var myobj = {
    "name" : getName(),
    "age" : 27
}

console.log(myobj)
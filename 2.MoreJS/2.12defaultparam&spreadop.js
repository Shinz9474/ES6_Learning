//----DEFAULT PARAMS----//
"use strict"

function greet($greeting = "Hello Shinu"){
    console.log($greeting)
}

//greet()

//----SPREAD OPERATOR----//

function testArgs(...names){
    console.log(names)
}

testArgs("Shinu", "Priya", "Deepak", "Kausik")
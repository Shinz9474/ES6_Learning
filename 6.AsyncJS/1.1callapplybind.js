//--------CALL---------//
let obj1 = {num: 2}
let obj2 = {num: 10}

let addToThis = function(a){
    return this.num + a; 
}
//"num" is not a global property. However, if we want a function to be associated with an object, we can use call

console.log(addToThis.call(obj1, 3)) //5=> The arg1 of the call function is the obj associated to it and the arg2... are the argument to the function

let addThisWithDesc = function(a, msg, i){
    return this.num + a + msg + i;
}
console.log(addThisWithDesc.call(obj1, 4, "Shinu", false))//6Shinufalse

//------APPLY------//
var arr = [1, 2, 4, 5, 6]
let addToNum = function(a, b, c, d, e){
    return this.num + a+b+c+d+e
}

console.log(addToNum.apply(obj1, arr))
console.log(addToNum.apply(obj2, arr))
//The only difference between call and apply is the we can pass the function arguments as an array

//-------BIND------//
let bound = addToNum.bind(obj2)
console.dir(bound(1, 2, 3, 4, 5))
//bind() returns a function instead of a value. bind return a function associated to the object
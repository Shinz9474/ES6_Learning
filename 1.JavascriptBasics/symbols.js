//------SYMBOLS ES2015------//
//Purpose of symbol type is to generate a unique id but we cannot access this id.

//let s = Symbol();
let s = Symbol("First Symbol")//The argument is a description for the symbol
console.log(typeof(s))//symbol
console.log(s.toString())//Symbol(First Symbol)

let s1 = Symbol();
let s2 = Symbol();
console.log(s1===s2)//false => A symbol always creates a unique id.

let s3 = Symbol("Test");
let s4 = Symbol("Test");
console.log(s3===s4)//false => A symbol always creates a unique id the description even if its equal doesnt matter

//To get hold of the symbol to be used in same or different file,
let s5 = Symbol.for("Registry Symbol")//Symbol.for creates a new symbol in the global registry with the description
let s6 = Symbol.for("Registry Symbol")
console.log(s5===s6)//true=>only one symbol with the same description can be registered globally

console.log(Symbol.keyFor(s5))//Gives the key for a symbol

let obj = {
    [s5] : "First Symbol"
}

console.log(obj)//{ [Symbol(Registry Symbol)]: 'First Symbol' }
console.log(Object.getOwnPropertyNames(obj))//[]
console.log(Object.getOwnPropertySymbols(obj))//[ Symbol(Registry Symbol) ]
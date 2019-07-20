//-----SETS----//
/** 
 - Javascript sets accepts only unique values\
 - Sets are iterable objects
 */
let mySet = new Set([1, 3, 5, 6, 3, 5, 7, 9, 10, 3, 5])
mySet.add(34)
mySet.add(35).add(17)
console.log(mySet)  //Set { 1, 3, 5, 6, 7, 9, 10, 34, 35, 17 }
console.log(mySet.size) //10
mySet.delete(34)
console.log(mySet)
console.log(mySet.has(34))  //false
mySet.clear()
console.log(mySet)  //Set {}


//-----WEAKSETS----//
/** 
 - Javascript weaksets only accepts objects\
 - Does not allow primitive values
 - WeakSet are not iterable objects
 */

let myweakSet = new WeakSet([{a:1}, {b:2}, {c:3}])
console.log(myweakSet)
// for(let mws of myweakSet)
//     console.log(mws)        //TypeError: myweakSet is not iterable

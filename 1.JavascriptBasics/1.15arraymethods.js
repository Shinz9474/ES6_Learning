//---------ARRAY METHODS---------//
let arr = [1,6,3,12,9,22,6,4,9,17,11,4]

console.log("PUSH ",arr.push(29))    //Add element at the last index. Returns updated length
console.log(arr[arr.length-1])//29

console.log("POP ",arr.pop())  //Removes element at the last index. Return removed element
console.log(arr[arr.length-1])//4

console.log("UNSHIFT ",arr.unshift(32))   //Add element at the first index. Returns updated length
console.log(arr[0])//32

console.log("SHIFT ",arr.shift())   //Removes element at the first index. Returns removed element
console.log(arr[0])//1

arr.forEach((ele, index)=>console.log("Element:",index ,ele))
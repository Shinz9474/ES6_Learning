//-------ARRAYS-------//
//Arrays as usual are '0' based
let arr = [1,4,23,7,44,9, "Shinu", false]
var myobj = {
    "type": "mixed array",
    "obj" : arr
}
console.log(myobj)
console.log(myobj.obj[1])

//To add an element
arr[8] = "Test"
console.log(arr)

arr[10] = false
console.log(arr)//[ 1, 4, 23, 7, 44, 9, 'Shinu', false, <2 empty items>, false ]
//Length keep updating
console.log(arr.length)
    //Arrays internally are objects. So, array.length basically is like myobj.propertyname
    //=>length is a property of object array
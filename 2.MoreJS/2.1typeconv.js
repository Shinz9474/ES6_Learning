let val;

//--------TO STRING-------//
//Number
val = 544
console.log(typeof val) //number
console.log(val.length) //undefined: length is a property of String

//Number to String
val = String(544)
console.log(typeof val) //string
console.log(val.length) //3
val = String(4+4)
console.log(val) //8
val = String(4)+String(4)
console.log(val) //44

//Boolean to string
val = String(true)
console.log(typeof val) //string
console.log(val.length) //4

//Date to string
val = String(new Date());
console.log(val)    //Sat Jun 22 2019 23:59:27 GMT+0530 (IST)

//Array to string
val = String([1, 2, 3, 5, 6, 7])
console.log(val)    //1,2,3,5,6,7

val = [1, 2, 5, 6, 43]
console.log(val)    //[ 1, 2, 5, 6, 43 ]

//toString()
val = (5).toString()
console.log(val)    //5
val = (true).toString()
console.log(val)
val = (5).toLocaleString()
console.log(val)    //5


//--------TO NUMBER-------//
val = '5'
//console.log(val.toFixed())  //ERROR

//String to Number
val = Number(val)
console.log(val.toFixed())  //5

//Boolean to Number
val = Number(true)
console.log(val.toFixed())  //1
val = Number(false)
console.log(val.toFixed())  //0
val = Number(null)
console.log(val.toFixed())  //0
val = Number(undefined)
console.log(val.toFixed())  //NaN : Not a number
val = Number('Hello')
console.log(val.toFixed())  //NaN : Not a number
val = Number([1, 2, 3, 4])
console.log(val.toFixed())  //NaN : Not a number

//parseInt/parseFloat
val = parseInt('5')
console.log(val.toFixed())  //5
val = parseInt('5.677')
console.log(val.toFixed(2))  //5.00
val = parseFloat('5.67')
console.log(val.toFixed(2))  //6.67


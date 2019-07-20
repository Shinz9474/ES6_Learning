const num1 = 100
const num2 = 20
let val;

//Simple math
val = num1 + num2   //120
console.log(val)
val = num1 - num2   //80
console.log(val)
val = num1 * num2   //2000
console.log(val)    
val = num1 / num2   //5
console.log(val)
val = num1 % num2   //0
console.log(val)

//MATH obj
val = Math.PI   //PI is a property in math
console.log(val)    //3.141592653589793

val = Math.E    //Eulers no
console.log(val)

val = Math.round(2.4)    
console.log(val)    //2

val = Math.round(2.5)    
console.log(val)    //3

val = Math.ceil(4.3)    //Round up
console.log(val)    //5

val = Math.floor(4.8)   //Round down
console.log(val)    //4

val = Math.sqrt(4.566) 
console.log(val)    //2.1368200672962616

val = Math.abs(-44)
console.log(val)    //44

val = Math.pow(8, 3)
console.log(val)    //512

val = Math.min(7,3,98,45,35,734, -4, -9,4)
console.log(val)    //-9

val = Math.max(7,3,98,45,35,734, -4, -9,4)
console.log(val)    //734

val = Math.random()
console.log(val)    //0.4435107069746411: Returns random decimal
//For a random whole no.,

val = Math.random() * 20
console.log(val)    //18.992528387991165: Returns random no. from 0 to 19

val = Math.round(Math.random() * 20)
console.log(val)    //8
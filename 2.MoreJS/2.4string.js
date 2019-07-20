const firstname = 'Shinu'
const lastname = 'Mathew'

let val;

//Concat
val = firstname+lastname
console.log(val)    //ShinuMathew
val = firstname + ' ' + lastname
console.log(val)    //Shinu Mathew

//Append
val = 'Priya '
val += 'Mathew'
console.log(val)    //Priya Mathew

//Escaping
val = 'Thats awesome!,\n I can\'t wait'
console.log(val)    /*Thats awesome!, 
                    I can't wait*/

//----STRING METHODS----//
val = firstname.length
console.log(val)    //5

val = firstname.concat(' ', lastname)
console.log(val)    //Shinu Mathew

val = firstname.toLowerCase()
console.log(val)    //shinu

val = firstname[3]
console.log(val)    //n

val = firstname.indexOf('n')
console.log(val)    //3 , Starts from 0 same like in arrays

val = firstname.charAt(4)
console.log(val)    //u

val = lastname.charAt(firstname.length)
console.log(val)    //w

val = (firstname+lastname).substring(3, 9)
console.log(val)    //nuMath

val = (firstname+lastname).slice(-2)
console.log(val)    //ew

val = (firstname+lastname).split('u')
console.log(val)    //[ 'Shin', 'Mathew' ]
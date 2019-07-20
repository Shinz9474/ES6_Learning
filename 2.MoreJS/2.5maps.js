var shinu = {
    name : 'Shinu',
    age : 27,
    role : 'SDET'
}

var deepak = {
    name : 'Deepak',
    age : 31,
    role :'Consultant'
}

var priya = {
    name : 'Priya',
    age : 26,
    role : 'Counsellor'
}

var trio = new Map()
trio.set('Shinu', shinu)
trio.set('Deepak', deepak)
trio.set('Priya', priya)

//----LOG MAP VALUES----//
for (const value of trio.values()) {
 console.log(value)
}
/*
{ name: 'Shinu', age: 27, role: 'SDET' }
{ name: 'Deepak', age: 31, role: 'Consultant' }
{ name: 'Priya', age: 26, role: 'Counsellor' }
*/

//----LOG MAP ENTRIES----//
for (const value of trio.entries()){
    console.log(value[0])
    console.log(value[1])
}
/*
Shinu
{ name: 'Shinu', age: 27, role: 'SDET' }
Deepak
{ name: 'Deepak', age: 31, role: 'Consultant' }
Priya
{ name: 'Priya', age: 26, role: 'Counsellor' }
*/

//----LOG MAP ENTRIES AS ARRAY----//
for (const [key, value] of trio.entries()){
    console.log(`${key} ==> \n${value}`)
}
/*
Shinu ==> 
[object Object]
Deepak ==> 
[object Object]
Priya ==> 
[object Object]
*/

//----LOG MAP USING FOREACH----//
trio.forEach((value, key)=> console.log(key))
/*
Shinu
Deepak
Priya */


//-----CONVERT ARRAY OF ARRAYS INTO MAP----//
let arrofarr = [[1, 'Shinu'], [2, 'Deepak'], [3, 'Kaushik'], [4, 'Gautham']]
let mapofarr = new Map(arrofarr)
console.log(mapofarr)   //Map { 1 => 'Shinu', 2 => 'Deepak', 3 => 'Kaushik', 4 => 'Gautham' }
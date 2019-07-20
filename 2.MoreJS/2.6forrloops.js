let userinfo = {
    name : 'Shinu',
    age : 27,
    role : 'SDET',
    skills : [
        'Java',
        'ES6',
        'GoLang'
    ]
}

let globalskills = [
    'Java',
    'ES6',
    'GoLang',
    'C#',
    'Selenium',
    'APIAutomation'
]

globalskills.musthaveskill = 'LINUX'
Object.defineProperty(globalskills, 'notmandatoryskills', {value: ['Python', 'Rust', 'Dart'], enumerable: false})
//For in loop, checks the enumerable for each of the properties in it and if that is set to true, takes it else leaves it

//----FOR IN: Loops the property names---//
let text = ''
for(let propnames in userinfo){
    text += userinfo[propnames]
}
//console.log(text)   //Shinu27SDETJava,ES6,GoLang

//-----FOR IN vs FOR OF-----//
for(let skill in globalskills){
    console.log(skill)
}
/* 
0
1
2
3
4
5
musthaveskill   //The musthaveskill is not a value in the array, it is a property of the array
=> Reason: for in, iterates over the keys and property names
[0, 1, 2, 3, 4 ,5] are */

for(let skill of globalskills){
    console.log(skill)
}
/*
Java
ES6
GoLang
C#
Selenium
APIAutomation
=> for of iterates over values. The item of the arrays
*/
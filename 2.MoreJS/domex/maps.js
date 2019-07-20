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

let table =''

for (const value of trio.values()) {
   table +='<tr>'
    table += `<td>${value.name}</td>`
    table += `<td>${value.age}</td>`
    table += `<td>${value.role}</td>`
   table +='</tr>'
}

table = `<tbody>${table}</tbody>`

var tableHead = document.getElementById('table').innerHTML 
console.log(tableHead)
table = tableHead+table
console.log(table)
document.getElementById('table').innerHTML = table
const path = require('path')
const os = require('os')

class DisplayMethod{
    display()
{
    var pathobj = path.parse(__filename);
console.log(pathobj);

var totalmem = os.totalmem();
var freemem = os.freemem();
//Template string- to build string without concatenation
console.log(`total mem: ${totalmem}`);
console.log(`total mem: ${freemem}`);
}

show()
{
    var pathobj = path.parse(__filename);
console.log(pathobj);

var totalmem = os.totalmem();
var freemem = os.freemem();
//Template string- to build string without concatenation
console.log(`total mem: ${totalmem}`);
console.log(`total mem: ${freemem}`);
}

get()
{
    var pathobj = path.parse(__filename);
console.log(pathobj);

var totalmem = os.totalmem();
var freemem = os.freemem();
//Template string- to build string without concatenation
console.log(`total mem: ${totalmem}`);
console.log(`total mem: ${freemem}`);
}
}
function get()
{
    var pathobj = path.parse(__filename);
console.log(pathobj);

var totalmem = os.totalmem();
var freemem = os.freemem();
//Template string- to build string without concatenation
console.log(`total mem: ${totalmem}`);
console.log(`total mem: ${freemem}`);
return totalmem;
}

module.exports = get;
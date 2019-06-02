const Vardemo = require('./usestrict')

const varDemoObj = new Vardemo();

var getType = (a)=>typeof(a)
console.log("Type of varDemoObj: ",getType(varDemoObj))
varDemoObj.display("Hi Shinu")


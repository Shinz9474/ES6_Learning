const myapp = require('./myapp')
const path = require('path')
const os = require('os')
const fs = require('fs')
const inbuilt = require('./inbuiltfunc')
const Logger = require('./Logger')


const logger = new Logger();
logger.on('InitiatedReport', (args)=>console.log(args))

logger.log("Shinu")

//------------EVENTS----------------
// const emitter = new EventEmitter();
// //listeners
// emiiter.on('messagelogged', function(){
//     console.log("Message logged");
// })

// emitter.emit('messagelogged');// To signal an event has happened. For that to be recieved we need to register listener before events

//------------FS----------------
// fs.readdir('./', function(err, result){
//     if(err) console.log("Something went wromg", err)
//     else console.log(result);
// })

//------------General----------------
// function sayHello(name) {
//     global.console.log("Hello "+name)
// }
//------------OS----------------
// var totalmem = os.freemem()
// sayHello("Shinu")
// myapp.adder(3,2)
// inbuilt.display();
// console.log(path.dirname())




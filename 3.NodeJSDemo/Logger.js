const EventEmitter = require('events')
const DisplayMethod = require('./inbuiltfunc')

class Logger extends EventEmitter{
    //Inside a class a function is a method.
    //'function' is not required inside a class.
     log(message) {
         this.emit('InitiatedReport', {reportid: 1, status: 'PASS'}); 
     }
 }
console.log(DisplayMethod)
 
 module.exports = Logger
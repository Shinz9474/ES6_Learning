const EventEmitter = require('events');
const emitter = new EventEmitter();
//------------EVENTS----------------
//Events should always be in a separate class

//listeners
emitter.on('messagelogged', function(){
    console.log("Second standby");
})
emitter.on('messagelogged', ()=>console.log("Initial listener"))
emitter.on('PragaSlept', (args)=>console.log(args))
emitter.emit('messagelogged');// To signal an event has happened. For that to be recieved we need to register listener before events
emitter.emit('PragaSlept', {id : 1, text: "Slept...."});


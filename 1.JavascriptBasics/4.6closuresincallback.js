//-------CLOSURES IN CALLBACK---------//
/*Since JS is single threaded, there is no concept of wait. Because if we make browser to wait, we are eseentially hanging the browser
Hence we have functions like setTimeouts */

var a = 10;
var time = 1000
for(let i =0; i<1000; i++){
    a = (Math.floor(Math.random() * Math.pow(10,6)));
    (function(){
        var currentvalueofi = i;
        setTimeout(()=>console.log("waiting",currentvalueofi), 100)
    })();
    /*
    setTimeout(()=>console.log("waiting",i), 100);
    Ideally, the output of the above code be "waiting1" then wait until 100ms and the "waiting2".
    But what happens is, the settimeout queues up the execution of the function in the first argument and by the time 100 ms it will 
    print all the results from 1 to 1000
    Solution:
    Wrapp the block in an IIFE
    */  
}

var getA = function(){
    console.log(`After ${time} millisec, value of a is ${a}`)
}
setTimeout(getA, time);

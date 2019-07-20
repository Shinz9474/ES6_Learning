//----TRICKY JS----//

/*
var i;
var print = function() {
    console.log(i)
}
for(i=0; i<10; i++){
    setTimeout(print, 1000)
}
*/

/*As an expectation, setTimeout(print, 1000),  should print 0-9 after 1 second
But, the output is 
10
10
10
10
10
10
10
10
10
10

Reason is setTimeout gets the print object and holds on to it untill the time out(1000) and registers the calls without executing until time out
After 1000, it get the call and executes it. Meanwhile the value of i is 10  and since the call is looped for 10 times, it prints 10 10 times*/

//Solution:
/*We need is, when we queue up the 10 calls, we need them to point to different values of i at the instance when settimeout is called
And to create a seperate copy of i, we need to wrap it up in a function*/

var i;

for(i=0; i<10; i++){
    (function(){    
    var itemp = i;    
    setTimeout(function() {
        console.log(itemp)
    }, 1000)
    })();
}
/*This now waits for 1 second and then prints 1 to 10, this is because, in each time, in each iteration os for loop, we are saving the value of i in a scope.*/
//----OR WE CAN ALSO PASS THE itemp AS A FUNCTION ARG TO IIFE----//

for(i=0; i<10; i++){
    (function(itemp){   
    setTimeout(function() {
        console.log(itemp)
    }, 1000)
    })(i);
}
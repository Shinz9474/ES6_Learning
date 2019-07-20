//--------CLOSURES----------//

var a = 10;

function outer(){
    var b = 20;

    var inner = function(){
        console.log(a);
        console.log(b);
    };
    //inner();
    return inner;
}
var innerfunc = outer();
innerfunc();    //Doesnot throws error even though it has b
//console.log(b)  //Throws error
/*Here, the scope of b is outer

This works because JS has the concept of "Closures"
When JS creates a function object, it also remembers the scope chain when that function was declared or assigned.
It remembers everything in the scope of the function when function object is created
The scope is latched like a pointer to the object and its members wherever it is executed from
*/
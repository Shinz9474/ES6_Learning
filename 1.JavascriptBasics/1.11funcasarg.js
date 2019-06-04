//--------FUNCTION AS ARGUMENT--------//

var f = function(name){
    console.log("Hello "+name)    
}
var exec = function(fn, name){
    fn(name)
}
exec(f, "Shinu");
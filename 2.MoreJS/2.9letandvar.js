let a =10;
var b =20;

for(var x1 =0; x1<10; x1++){
    var y1 =34;
    //console.log("x inside the loop: ", x1)
}
console.log("============================")
console.log("x1 outside the loop: ", x1)    //x1 outside the loop:  10
console.log("y1 outside the loop: ", y1)    //y1 outside the loop:  34
/*
var sets the variable globally. 
Variable declared using var inside for loop or any closed scope(which is not there in JS), can be accessed outside.
In JS, scope is not created when using "{ }". However, this behaviour leads to confusion and hence "let" is used as a solution.
*/

for(let x2 =0; x2<10; x2++){
    let y2 =34;
    //console.log("x inside the loop: ", x1)
}
console.log("============================")
console.log("x1 outside the loop: ", x2)
console.log("y1 outside the loop: ", y2)
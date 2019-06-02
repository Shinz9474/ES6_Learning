//-----"==" and "===" operators-----//
var a= 10
var b= "10"
if(a == b)
    console.log("Values are equal") //Javascript interpreter type coerses a to string so we go for "==="
else
    console.log("Not equal")

a===b?console.log("Objects are equal"):console.log("Objects are not equal")
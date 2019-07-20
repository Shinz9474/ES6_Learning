//-----PALLINDROME-----//
function pallindrome(mystring){
    let reversestr = mystring.split('').reduce((revstring, curchar)=>{
        return curchar+revstring
    }, '')
    console.log(reversestr)
    return (mystring===reversestr)?true:false
}

if(pallindrome("MALAYALAM")){
    console.log("myString is pallindrome")
}
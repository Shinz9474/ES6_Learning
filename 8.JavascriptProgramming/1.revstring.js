//Reverse a string
function stringReverse(myString){

    //======My Method======//
    /* let reverstring = ''
        for(let i=myString.length-1; i>=0; i--){
            reverstring += myString.charAt(i)
        }    
    return reverstring  */   //shift+option+A


    //======Method1: split, reverse, join======//
    /* const strArr = myString.split('');  //split splits the characters to array 
    strArr.reverse()
    return strArr.join('') */

    //OptimizedMethod1
    /* return myString.split('').reverse().join('') */


    //======Method2: increementing loop======//
    /* let revString = ''
    for(let i = 0; i<myString.length; i++){
        revString = myString[i]+revString
    }
    return revString */


    //======Method3: for of loop======//
    /*let revString =''
    for(let char of myString){
        revString = char + revString
    }
    return revString*/


    //======Method4: high order function foreach=====//
    /*let revString = ''
    myString.split('').forEach(element => {
        revString = element+ revString
    });
    return revString*/


    //======Method4: high order function reduce=====//
    return myString.split('').reduce((revString, char)=>{
        return char + revString
    },'')

}



console.log(stringReverse("ShinuMathew"))

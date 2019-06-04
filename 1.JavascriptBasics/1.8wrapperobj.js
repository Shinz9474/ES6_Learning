//-------WRAPPERS IN JAVA--------//
let greeting = "Hello World"
console.log("greeting is of type "+ typeof(greeting)+" and its length is :"+ greeting.length)
//Is string a primitive or object
    /*string greeting has length operator which can be accessed by . operator
    This shud not be possible if string is a primitive...
    Reason is, Javascript has equalent object for each of the primitive data types */

    //==> String primitive also has String object
    //string.length => JS gets the string and converts it into wrapper String object and the length property will be available.
    //The object created is temporary to access the length and then discarded.

//TYPES OF WRAPPERS:
//  ==>  STRING || BOOLEAN || NUMBER || SYMBOL
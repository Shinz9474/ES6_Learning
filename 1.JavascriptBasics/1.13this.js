let getFullName = (fname, lname)=>{ return fname +" "+ lname }

var person = {
    "fname" : "Shinu",
    "lname" : "Mathew",
    "fullname" : function(){ return this.fname +" "+ this.lname }
};
console.log(person.fullname())

person.address = {
    "street" : "No. 21 Jagajeevanram colony",
    "city" : "Chennai",
    "state" : "TN"
}

person.isFromTN = function(){
    return person.address.state === 'TN'
}

console.log(person.isFromTN())
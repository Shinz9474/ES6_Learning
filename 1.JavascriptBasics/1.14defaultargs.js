var add = function(){
    var i, sum =0;
    for(i=0; i<arguments.length; i++){
        sum += sum+arguments[i]
    }
    return sum;
}
console.log(add(1,2,3,5,3,2))

//arguments is by default argument. arguments is an object not an array.
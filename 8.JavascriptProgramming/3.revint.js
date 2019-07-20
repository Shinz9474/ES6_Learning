function reverseint(integer){
    myInt = parseInt(String(integer).split('').reverse().join(''))
    console.log(integer+myInt)
}

reverseint(1234)
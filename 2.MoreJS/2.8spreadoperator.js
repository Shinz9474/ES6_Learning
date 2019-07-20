//----Converting an array to set---//
const ary = [1, 2, 4, 5, 2]
console.log([...new Set(ary)])  //[ 1, 2, 4, 5 ]

//---OR---//
console.log(Array.from(new Set(ary)))   //[ 1, 2, 4, 5 ]
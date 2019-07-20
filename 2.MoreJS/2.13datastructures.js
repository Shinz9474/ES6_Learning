//----------SET----------//
let myArray = [2,5,7,2,9,4,8,3,7,4,8,1,0,7,4,2,3,6,5,8,9]
console.log(`MyArray: \nLength: ${myArray.length}\n${myArray}`)
console.log("========================")

let mySet = new Set(myArray)
console.log(`MySet [of MyArray]: \nLength: ${mySet.size}`)
mySet.forEach(ele=>console.log(ele))
console.log("========================")

mySet.add(100)
mySet.add({1: "Shinu", 2: "Shibu"})
mySet.forEach(ele=>console.log(ele))

mySet.delete(5)
mySet.forEach(ele=>console.log(ele))

mySet.clear()
mySet.forEach(ele=>console.log(ele))


//----------MAPS----------//
let myMap = new Map([[1, "Shinu"], [2, "Deepak"], [3, "Kausik"], [4, "Gautham"]])
console.log(myMap)
for (const iterator of myMap.keys()) {
    console.log("Iterator"+iterator)
}

myMap.set(5, "Priya")
console.log(myMap)

myMap.delete(5)
console.log(myMap)

//----------WEAKSET----------//
let myWeakSet = new WeakSet()
let tc1 = {
    tcName: "Smoke001",
    tcDesc: "Smoke001_CreditCard",
    tcStatus: "Active"
}

let tc2 = {
    tcName: "Smoke002",
    tcDesc: "Smoke002_PayPal",
    tcStatus: "Active"
}

myWeakSet.add(tc1)
myWeakSet.add(tc2)

console.log(myWeakSet.has(tc1))
for(const tc in myWeakSet){
    console.log(tc.tcName)
}
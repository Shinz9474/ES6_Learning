//---------ARRAY METHODS---------//
let arr = [1,6,3,12,9,22,6,4,9,17,11,4]
let strarr = ["I", "LOVE", "INDIA"]
let empdetails = [
    {"id": 1, "name": "Shinu", "isactive": false, "dept": null},
    {"id": 2, "name": "Amit", "isactive": true, "dept": 1},
    {"id": 3, "name": "Bejoy", "isactive": true, "dept": 4},
    {"id": 4, "name": "Ceaser", "isactive": false, "dept": null},
    {"id": 5, "name": "Donald", "isactive": true, "dept": 4},
    {"id": 6, "name": "Eric", "isactive": false, "dept": 1},
    {"id": 7, "name": "Freddy", "isactive": false, "dept": 2},
    {"id": 8, "name": "Gerrad", "isactive": true, "dept": 1},
    {"id": 9, "name": "Hilton", "isactive": false, "dept": 1},
    {"id": 10, "name": "Indu", "isactive": false, "dept": 3},
    {"id": 11, "name": "Jermy", "isactive": true, "dept": 2}
]

let empteam = [
    {"deptid": 1, "deptname": "DEVOPS"},
    {"deptid": 2, "deptname": "DEVOLOPERS"},
    {"deptid": 3, "deptname": "TESTERS"},
    {"deptid": 4, "deptname": "DATAENG"}
]
/*
//1. PUSH
console.log("PUSH ",arr.push(29))    //Add element at the last index. Returns updated length
console.log(arr[arr.length-1])//29

//2. POP
console.log("POP ",arr.pop())  //Removes element at the last index. Return removed element
console.log(arr[arr.length-1])//4

//3. UNSHIFT
console.log("UNSHIFT ",arr.unshift(32))   //Add element at the first index. Returns updated length
console.log(arr[0])//32

//4. SHIFT
console.log("SHIFT ",arr.shift())   //Removes element at the first index. Returns removed element
console.log(arr[0])//1

//5. FOREACH
arr.forEach((ele, index)=>console.log("Element:",index ,ele))

//6. JOIN
console.log("Without joining",strarr)
let joinarr = strarr.join(" ")
console.log("With joining", joinarr)

//7. DELETE
console.log("Before deleting ",arr)
console.log("Deleting ",arr[5])
delete arr[5]
console.log("After deleting ",arr)

//8. FILTER
let activeEmp = emp.filter(obj=>obj.isactive)
activeEmp.forEach(ele=>console.log(ele))

//9. MAP
const empname = empdetails.map(emp=>emp.name);
console.log(empname)
const empinfo = empdetails.map(emp=> emp.id+"=> "+emp.name)
console.log(empinfo)
const empdept = empdetails.map(emp=>[`${emp.id}, ${emp.name}, ${empteam.forEach(team=> {
                                                                                if(emp.dept === team.deptid) 
                                                                                return team.deptname
                                                                                    })}`])
console.log(empdept)
//[1, Amit, Devops]

//10. Sort
const sortedteam = empdetails.sort((e1, e2)=> e1.dept>e2.dept?+1:-1)
console.log(sortedteam)

//11. Reduce
let sum = arr.reduce((ele, total)=>{
    total+ele},0)
console.log(sum)

//Reduce method takes 2 args, a function with 2 args, accumulator and currentValue. and returns accumulator after performing opertaions.
//The second arg reduce takes is the initial value for the accumulator
*/


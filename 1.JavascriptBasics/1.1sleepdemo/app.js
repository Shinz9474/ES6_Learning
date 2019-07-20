async function sleep(msec){
    return new Promise(resolve => setTimeout(resolve, msec)) 
}

async function testSleep(){
    let out = ""
    for(let i =0; i<100; i++){
        
        if(i%3==0){
            console.log("Great! you found a no. divisible by 3 : ",i)
            out += `<li>"Great! you found a no. divisible by 3 : ",${i}</li>`
            await sleep(1000)            
            document.getElementById("Notdivisibleby3").innerHTML = out
        } else {
            console.log("count... ",i)
            out += `<li>count... ${i}</li>`
            await sleep(100)
            document.getElementById('table').innerHTML = out
        }
        
    }
}

testSleep()
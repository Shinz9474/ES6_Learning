const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{ 
        console.log("Hi there...")
        reject(new Error("Error occured"))
    }, 3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{ 
        console.log("Hi Here...")
        resolve(2)
    }, 2000)
})

// Promise.all([p1, p2])
// .then(result => console.log(result))
// .catch(error => console.log(error))

//Return first fulfilled promise
Promise.race([p1, p2])
.then(result => console.log(result))
.catch(error => console.log(error.message))
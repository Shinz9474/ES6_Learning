//Better way to handle Callback hells is using Promises
//------------PROMISES------------//
    //A promise is an object which holds the eventual result of an aynchronous operation

const p = new Promise((resolve, reject) => { //When creating an new promise, we pass a function with 2 args to the constructor
    //Kick off some async work
    //...
    setTimeout(() => {
        //resolve(1);
        reject(new Error('messsage'));
    }, 2000)
    
});

//Consume this promise
p
.then(result => console.log('Result', result))//then => for the result
.catch(err => console.log('Error', err.message))//catch => for the error
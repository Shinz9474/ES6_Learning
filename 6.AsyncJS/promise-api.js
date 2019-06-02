//-----PROMISE API------//
//Simulating a scneario where an asynchronous operation completes successfully and unit test, we want to create promise

const resolvedPromise = Promise.resolve({id:1})//Returns a promise which is already resolved
resolvedPromise.then(result => console.log(result.id))

const rejectedPromise = Promise.reject(new Error('Reason for rejection'))//Returns a promise which is already rejected
resolvedPromise.catch(error => console.log(error))

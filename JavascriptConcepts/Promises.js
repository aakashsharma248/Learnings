// There are four methods which we can apply on the Promises

// 1. all:
// -> It will return array of promises in case all the promises are resolved after completion of all the promises
// -> Return the first reject promise immidiately incase any of the promises are rejected

// 2. allSettled:
// -> It will return array of promises after all the promises are resolved whether they are rejected or resolved

// 3. race:
// -> It will return a first completed promise immidiately whether it's rejected or resolved
// -> it will not wait for other promises to complete

// 4. any:
// -> It will return the first fulfilled promise immidiately 
// -> not wait for other promises to complete
// -> will return aggregated error incase no promise is fulfilled



const promise1 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("Promise1 Resolved")
  },1000)
})


const promise2 = new Promise((resolve, reject)=>{
   setTimeout(()=> {
    reject("Promise2 rejected")
   },2000)
})

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=> {
     resolve("Promise3 Resolved")
    },5000)
 })


 // catch block code will be executed immidiately as soon as any promise is rejected-
//   as promise2 is rejected so it will return the rejected one
 Promise.all([ promise1,promise2,promise3]).then((result)=>{
    console.log(result,"Promise resolved");
 })
 .catch(err=> console.log("Error", err));


 // then block will be executed when both thre promise complteted as both the defined promise are resolved 
//  so it will be resolved at the same time
 Promise.all([ promise1, promise3]).then((result)=>{
    console.log(result,"Promise 1 and 3 are resolved");
 })
 .catch(err=> console.log("Error", err));


// it will return the list of all promises after completion of all the promises whether they are rejected or resolved
 Promise.allSettled([ promise1,promise2, promise3]).then((result)=>{
    console.log(result,"recieved all promises results here");
 })
 .catch(err=> console.log("Error", err));

 // it will return the first complete promises immidiatelty after completion it is rejected or resolved
 Promise.race([ promise1,promise2, promise3]).then((result)=>{
    console.log(result,"will return first complete promise");
 })
 .catch(err=> console.log("Error", err));

 // it will return the first complete promises immidiatelty after completion it is rejected or resolved
 Promise.any([promise1,promise2, promise3]).then((result)=>{
    console.log(result,"will return first fulfilled promise immidiatelty");
 })
 .catch(err=> console.log("AggregateError", err)); 


 Promise.any([promise2]).then((result)=>{
    console.log(result,"will return first fulfilled promise immidiatelty");
 })
 .catch(err=> console.log("AggregateError", err)); // will return aggregated error incase no promise is fulfilled
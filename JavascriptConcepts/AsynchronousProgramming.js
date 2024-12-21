// In javascript there are three ways by which we can play with the asynchronous operation, those are defined below:

// 1. Callbacks -> Lead to a problem of Callback hell
// 2. Promises -> Lead to a  problem of Promises Chaining
// 3. Async Await -> A best way to deal with asynchronous operation

// Example of Callback

console.log("Start");
const fetchDataCallBack = (dataNumber,cb) =>{
    setTimeout(()=>{
        console.log(`Data ${dataNumber} is fetched after 2 sec`)
        if(cb){
        cb();   
        }
    },2000);
}
console.log("End");
fetchDataCallBack(1,()=>{
    fetchDataCallBack(2,()=>{
        fetchDataCallBack(3,()=>{
            fetchDataCallBack(4)
        });
    })
});


// FYI -> Promises has 3 states either it get's Pending, fullfilled and rejected, and bydefault it will give you two handlers which are resolve and reject which we can use directly.

// Example of Promises


console.log("Start")
const fetchDataPromises = (dataNumber) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log(`Data ${dataNumber} is fetched after 2 sec`)
        resolve("Resolved")
    },2000);
    })
}
console.log("End");
fetchDataPromises(1).then((res)=>{
    return fetchDataPromises(2)
    .then((res)=>{
        return fetchDataPromises(3)
        .then(()=>{
            
        })
    })
}).catch((err)=>{
    console.log("Under the catch", err);
})


// Example of Async Await

console.log("Start")
const fetchData = (dataNumber) =>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
        console.log(`Data ${dataNumber} is fetched after 2 sec`)
        resolve();
      },2000);   
    })
}

const asyncFetchData = async () =>{
    console.log('Fetching Data for 1');
    await fetchData(1);
    console.log('Fetching Data for 2');
    await fetchData(2);
    console.log('Fetching Data for 3');
    await fetchData(3);
}
console.log("End")
asyncFetchData();

//  We can also write the above code using the IIFE - using that we don't need to make the unnecessary call

// -> To use IIFE you just need to remove the function name and then wrap the function into paranthesis and at the end
// also use the open and close paranthesis

(async function() {
    console.log('Fetching Data for 1');
    await fetchData(1);
    console.log('Fetching Data for 2');
    await fetchData(2);
    console.log('Fetching Data for 3');
    await fetchData(3);
})()
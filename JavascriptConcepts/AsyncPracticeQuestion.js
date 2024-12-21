console.log("Start");

const promise1 = new Promise((resolve, reject) => {
  console.log("Promise 1");
  resolve("Resolved Promise 1");
});

promise1.then((res) => {
  console.log(res);
});

console.log("End");

// output
// Start
// Promise 1
// End
// Resolved Promise 1


async function asyncFunc() {
    console.log("1");
    const result = await new Promise((resolve) => {
      setTimeout(() => resolve("2"), 1000);
    });
    console.log(result);
    console.log("3");
  }
  
  asyncFunc();
  console.log("4");

// output
// 1
// 4
// 2
// 3

function higherOrder(callback) {
    console.log("Start");
    callback();
    console.log("End");
  }
  
  higherOrder(() => {
    setTimeout(() => {
      console.log("Callback Executed");
    }, 1000);
  });
  
  console.log("Outside Function");

// output:
// Start
// End
// Outside Function
// Callback Executed


async function asyncWithPromise() {
    console.log("Inside async function");
    return new Promise((resolve) => {
      resolve("Promise resolved");
    });
  }
  
  asyncWithPromise().then((res) => console.log(res));
  console.log("End of script");

// output:
// Inside async function
// End of script
// Promise resolved


// Imp
async function asyncFunc1() {
    console.log("Inside asyncFunc1");
    return "asyncFunc1 resolved";
  }
  
  async function asyncFunc2() {
    console.log("Inside asyncFunc2");
    const result = await asyncFunc1();
    console.log(result);
    return "asyncFunc2 resolved";
  }
  
  asyncFunc2().then((res) => console.log(res));
  console.log("End of script");
  

//   output:
//   Inside asyncFunc2
// Inside asyncFunc1
// End of script
// asyncFunc1 resolved
// asyncFunc2 resolved


// IMP
async function fetchData() {
    console.log("Fetch Start");
    const data1 = await new Promise((resolve) =>
      setTimeout(() => resolve("Data 1"), 5000)
    );
    console.log(data1);
  
    const data2 = await new Promise((resolve) =>
      setTimeout(() => resolve("Data 2"), 2000)
    );
    console.log(data2);
  
    console.log("Fetch End");
  }
  
  fetchData();
  console.log("After fetchData Call");

  
//   output:
//   Fetch Start
// After fetchData Call
// Data 1
// Data 2
// Fetch End


function higherOrderPromise(callback) {
    console.log("Start");
  
    const promise = new Promise((resolve) => {
      resolve("Resolved from Promise");
    });
  
    promise.then((res) => {
      console.log(res);
    });
  
    callback();
    console.log("End");
  }
  
  higherOrderPromise(() => {
    console.log("Callback executed");
  });

//   output:
//   Start
// Callback executed
// End
// Resolved from Promise

// VERY IMPORTANT
async function funcA() {
    console.log("A1");
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("A2");
  }
  
  async function funcB() {
    console.log("B1");
    await new Promise((resolve) => setTimeout(resolve, 100));
    console.log("B2");
  }
  
  funcA();
  funcB();
  console.log("End");
  

// A1
// B1
// End
// B2
// A2


const promise5 = new Promise((resolve, reject) => {
    resolve("Promise 1 resolved");
  });
  
  promise5
    .then((res) => {
      console.log(res);
      return new Promise((resolve, reject) => {
        resolve("Promise 2 resolved");
      });
    })
    .then((res) => {
      console.log(res);
    });
  
  console.log("End of script");

//   output
//   End of script
// Promise 1 resolved
// Promise 2 resolved

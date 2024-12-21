// whenever we use variabe of parent function in child function then the closure will get formed
// closure is a function that have access to it local scope along with it's lexical scope
// when closure is formed the variable value will be retained even if we return the function itself

// In below example a will create the closure with innerFunction but b will not create any closure
const outerFunction = () => {
  let a = 15;
  const innerFunction = () => {
    let b = 10;
    console.dir(a);
    console.dir(b);
  };
  return innerFunction;
};

const innerFunc = outerFunction();
console.dir(innerFunc());

console.log(innerFunc);
console.dir(innerFunc);

// *APPLICATION OF CLOSURES*

// 1.  to call function only once

const callOnce = () => {
  let executedOnce = false;

  return function () {
    if (!executedOnce) {
      executedOnce = true;
      console.log("Great! The function is executed");
    }
  };
};
const func = callOnce();
func();
func(); // this will not print the value as code will not go under the if block

// 2.  memoization function

const memoizeFunction = () => {
  let cacheData = {};
  return function (num) {
    if (cacheData[num]) return cacheData[num];
    let ans = 1;
    for (let i = 1; i < num; i++) {
      ans *= i;
    }
    console.log("Recalulated");
    cacheData[num] = ans;
    return ans;
  };
};

const calculateFactorial = memoizeFunction();
console.log(calculateFactorial(5));
console.log(calculateFactorial(10));
console.log(calculateFactorial(5));

// Print count using var itself under for loop

//You might expect this to print 1, 2, 3, 4, 5, but it actually prints 6, 6, 6, 6, 6! 
//This happens because all the setTimeout callbacks are referring to the same i (due to var having function scope),
// and by the time the timeout callbacks execute, the loop has completed and i is 6.
for (var i = 1; i < 5; i++) {
  setTimeout(() => {
    console.log(i);  // 5 5 5 5 5
  }, 1000);
}

// you can simply use let instead of var, because let has block scope and solves the problem without needing a closure
for (let i = 1; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // 1 2 3 4 
    }, 1000);
}

// In previous case it was forming closure with i of for loop whose value get updated till our callback get executed so that's 
// why it was prining the same value of i again and again

// now after wrapping this under function and passing i as argument it's formming closure with the i of passed argument which is
// different and will be stored so it's priniting different value


// solved using closure
for (var i = 1; i < 5; i++) {
    function normalFunction(i){
      setTimeout(() => {
        console.log(i,"under function");  
      },0);
    }
    normalFunction(i);
  }
  
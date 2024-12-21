// Polyfill of forEach:
const arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach((ele,i,arr)=>console.log(ele));

Array.prototype.myforEach = function(cb){
 for(let i=0;i<this.length;i++){
    cb(this[i],i,this);
 } 
}

arr.myforEach((ele,i,arr)=>{
    // console.log(ele, arr,'forEach');
})



// Polyfill of Map:
const arr2 = [1,2,3,4,5,6,7,8,9,10];
// const ans = arr.map((ele,i,arr)=>ele*2);
// console.log(ans);

Array.prototype.myMap = function(cb){
 let newArr = [];
 for(let i=0;i<this.length;i++){
    newArr.push(cb(this[i],i,this));
 } 
 return newArr;
}

const ans3 = arr2.myMap((ele,i,arr2)=>{
    return ele*2
})
// console.log(ans3);

// Polyfill of Filter:
const arr4 = [1,2,3,4,5,6,7,8,9,10];
// const ans = arr.filter((ele,i,arr)=>ele>4);
// console.log(ans);

Array.prototype.myFilter = function(cb){
 let newArr = [];
 for(let i=0;i<this.length;i++){
    if(cb(this[i])){
      newArr.push(this[i]);
     }
 } 
 return newArr;
}

const ans5 = arr4.myFilter((ele,i,arr2)=>{
    return ele>4
})
// console.log(ans5,'filter');

//Polyfll for Reduce:
const arr6 = [1,2,3,4,5];
// const sum = arr6.reduce((acc, curr, i, arr)=>{
//      return acc+curr;
// },0)
// console.log(sum);

Array.prototype.myReduce = function(cb,initialVal){
    let acc;
    for(let i=0;i<this.length;i++){
      acc = acc ? cb(acc, this[i], i, this) : this[i];  
   }
   return acc;
}
const sum1 = arr6.myReduce((acc, curr, i, arr)=>{
    return acc+curr;
},0)
// console.log(sum1);

// Polyfill for Call:
const obj = {
    firstName: 'Aakash',
    lastName: 'Sharma',
}
 function fn(country,state){
    console.log(`firstName: ${this.firstName}, lastName: ${this.lastName}, Country: ${country}, State: ${state}`);
}

// fn.call(obj,"India");

Function.prototype.myCall = function(obj={}, ...args){
  
    if(typeof this !== 'function'){
        throw new Error("This is not a function");
    }
    obj.fn = this;
    obj.fn(...args);
}
// fn.myCall(obj,"India","Uttar Pradesh");


// Polyfill for Apply:
const obj1 = {
    firstName: 'Aakash',
    lastName: 'Sharma',
}
 function fn1(country,state){
    console.log(`firstName: ${this.firstName}, lastName: ${this.lastName}, Country: ${country}, State: ${state}`);
}

// fn1.apply(obj,["India","Uttar Pradesh"]);

Function.prototype.myApply = function(obj={}, args=[]){
  
    if(typeof this !== 'function'){
        throw new Error("Not a function");
    }
    if(!Array.isArray(args)){
        throw new Error("Not a Array");
    }
    obj.fn1 = this;
    obj.fn1(...args);
}
// fn1.myApply(obj1,["India","Uttar Pradesh"]);


// Polyfill for Bind:
const obj2 = {
    firstName: 'Aakash',
    lastName: 'Sharma',
}
 function fn2(country,state, city){
    console.log(`firstName: ${this.firstName}, lastName: ${this.lastName}, Country: ${country}, State: ${state}, City: ${city}`);
}

const bindFunction = fn2.bind(obj2,"India","Uttar Pradesh");
// bindFunction("Deoband")

Function.prototype.myBind = function(obj={}, ...args){
    if(typeof this !== "function"){
        throw new TypeError("Not a function")
      }
      obj.fn2 = this;
    return function(...funArgs){
         obj.fn2(...args,...funArgs);
    }
}
const myBindFunction = fn2.myBind(obj2,"India","Uttar Pradesh");
myBindFunction("Deoband")

// Polyfill for Promise.all():

const promise1 = new Promise((resolve, reject)=>{
   setTimeout(()=>{
    reject("promise 1 resolved");
   },1000)
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
     resolve("promise 2 resolved");
    },2000)
 })


//  Promise.all([promise1, promise2])
//  .then((msg)=> console.log(msg,"success"))
//  .catch(()=> console.log("reject"));

console.dir(Promise);

 Function.prototype.myAll = function(promiseArr){
    let result = [];
    let index = 0;
    return new Promise((resolve, reject)=>{
        promiseArr.forEach((promise)=>{
            promise.then((res)=>{
              result[index] = res;
              index++;
              if(index === promiseArr.length){
                resolve(result);
              }
            }).catch(()=>{
                reject("Promise rejected")
            })
        })
    })
 }

 Promise.myAll([promise1, promise2])
 .then((msg)=> console.log(msg,"success"))
 .catch((err)=> console.log(err,"reject"));
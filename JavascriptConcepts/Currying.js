// Currying in JS

// currying turns a function that takes multiple arguments into a series of functions that each take a single argument
//  and eventually return the result.

// Currying can be useful for:
// Reusability: You can create specialized functions by passing fewer arguments.


// not a curried function
function addData(a,b,c){
    return a+b+c
}
console.log(addData(1,2,3));

// in case we need to conver the above function to curried functions
function addCurriedData(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(addCurriedData(1)(2)(3));




function multiply(x){
    return (y) => {
        return (z) => {
            return x*y*z;
        }
    }
}



const data1 = multiply(2);
const data2 = data1(3);
const data3 = data2(4);
console.log(data1)
console.log(data2)
console.log(data3)

// Instead of calling method like above we can call the method in a single line only.
const ans = multiply(2)(3)(4);
console.log(ans);




const multiplyByTwo = (x) => {
    return x*2;
}

const multiplyByThree = (x) => {
    return x*3;
}

// Instead of creating a different method we can create a generic method which we can call and use it.



const multiplyByN = (x) => {
    return (y)=> {
        return x*y;
    }
}

const twiceMultiplication = multiplyByN(2);
const ans2 = twiceMultiplication(8)
console.log(ans2);

const thriceMultiplication = multiplyByN(3);
const ans3 = thriceMultiplication(9)
console.log(ans3);




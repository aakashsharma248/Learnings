
// Shallow Copy
// A shallow copy means creating a copy of an object, but only copying the top-level properties. 
// If the object contains references to other objects (like arrays or nested objects), only the reference is copied,
// not the actual object itself. This means changes to the nested objects in the copy will affect the original object 
// and vice versa.

// Deep Copy
// A deep copy means creating an exact copy of an object, including all nested objects and arrays.
// This ensures that changes to the copy do not affect the original object in any way,
// as all levels of the object are independently duplicated.


// When to Use Each
// Shallow Copy is usually sufficient for flat objects (i.e., objects without nested objects or arrays) 
// Deep Copy is necessary when you need to work with objects containing nested structures and ensure that changes 
// to the copied object do not affect the original.

const obj1 = {
    a: 1,
    b: {
        c: 2
    }
}

// Normal Copy --> Reference will get copy so all the value will get copied on both
let obj2 = obj1;
obj2.a=3;
console.log(obj1);
console.log(obj2);

// Shallow Copy  --> Nested keys will still get copied as it's a shallow copy
const obj3 = {...obj1}
obj3.a = 4;
obj3.b.c = 10;
console.log(obj1);
console.log(obj3);


// Deep Copy --> Nested keys will not get copied
const obj4 = JSON.parse(JSON.stringify(obj1));
obj4.b.c = 12
console.log(obj1);
console.log(obj4);

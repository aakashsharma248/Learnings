// Map and set used to work like a same
// Set and array are not same, set are much faster than the array
// we can use for of block to iterate over the element but not for in loop
// We will be iterating on the same order of insertion

const data = new Set();

data.add(4);
data.add(5);
data.add(5);
data.add(5);

console.log(data,"data");

data.delete(5);

console.log(data,"data");

console.log(data.has(5));

data.clear();

console.log(data,"data");

data.add(1);
data.add(2);
data.add(3);
data.add(4);
data.add(5);
data.add(6);

console.log(data,"data");

// data.forEach((ele)=> console.log(ele))
for(ele of data){
    console.log(ele,'1111111')
}

console.log(data.size,"data size")


// MAP

const map1 = new Map();
map1.set("a",1);
map1.set("b",2);
map1.set("b",10);
map1.set(3,5);
map1.set("d", 12)
console.log(map1);

console.log(map1.get("b"));

console.log(map1.size);

map1.delete("b");

console.log(map1.get("a"));

console.log(map1.has("b"),"check if b is present or not");

// A Map is an iterable, so it can be directly iterated.
map1.forEach((ele)=> console.log(ele,"$$$$$$$$$$$"))

console.log(map1.values(), "values")
console.log(map1.keys(), "keys")


// Difference between map and object
// 1. A Map does not contain any keys by default
    //   An Object has a prototype, so it contains default keys that could collide with your own keys if you're not careful.

//   2. A Map's keys can be any value (including functions, objects, or any primitive).
//   The keys of an Object must be either a String or a Symbol.  

// 3. A Map is an iterable, so it can be directly iterated.
// Object does not implement an iteration protocol, and so objects are not directly iterable using the JavaScript for...of statement (by default).
// The for...in statement allows you to iterate over the enumerable properties of an object.s

// 4. Map is Performs better in scenarios involving frequent additions and removals of key-value pairs.
// Not optimized for frequent additions and removals of key-value pairs.
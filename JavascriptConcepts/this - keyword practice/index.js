// "use strict"    


// this in "global" space will return the value of global object which can be different in different environments, in browser 
// it's window so it's returning window
// console.log(this);



// In non-strict mode the value of this under normal function will be "Global" object
// where as in strict mode the value would be undefined
// In non-strict mode "This" substitution happens which converts undefined to "Global" in non-strict mode only
// function data() {
//     function innerData(){                                                                                       
//         console.log(this);
//     }
//     innerData();
// }
// data();


// In strict mode the value of this keyword also depends on how the function is called

// function data() {
//     function innerData(){                                                                                       
//         console.log(this);  // will log undefined
//     }
//     console.log(this);  // will log window object as called using window so it will work as this 
//      innerData();
// }
// window.data(); // if we call function like this then window value will be assigned to this



// "This" under arrow function

// --> Arrow function doesn't have it's own this binding it fetches the value from it's enclosing lexical scope 
// const data = () => {
//     console.log(this);  // will return window object 
//     function getData() {
//      console.log(this);  // In Strict mode -> Undefined, In non-strict mode -> window
//     }
//     getData();
// }

// data();


// This under object

// const obj = {
//     a: "Aakash",
//     b: "Sharma",
//     c: function(){
//     console.log(this.a + " "+ this.b); // this under normal method of object will refer to the object itself
//     },
//     d: ()=> {
//     console.log(this.a + " "+ this.b, this); // this will point to the window object as in its lexical space this is window
//     }
// }

// obj.c();
// obj.d();



// const obj = {
//     a: "Aakash",
//     b: "Sharma",
//     c: function(){
//     console.log(this.a + " "+ this.b); // this under normal function will refer to the object itself
//     const getData = () => {
//         console.log(this);
//     }
//     getData();

//     },

//    d: ()=> {
//     console.log(this); // will return window as it doesn't have it's own bindig
//     function getData(){
//         console.log(this); // will return undefined as getData is being called without using any dot(.)
//     }
//     getData();
//    }
// }

// obj.d();


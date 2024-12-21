// Call, Apply and Bind all the functions are used to access the propery under a object which a object does not have.
// this is also known as function borrowing because we borror a function in this
const obj1 = {
    firstName: "Aakash",
    "last_Name": "Sharma",
    fn: function(name, otherName) {
        console.log(this.firstName + " " + this["last Name"] +" "+ name +" "+ otherName)
    }
}

const obj2 = {
    firstName: "Ajay",
    "last Name": "Sharma's",
}


// pass multiple arguments in apply
console.log(obj1.fn.call(obj2, "agra", "jaipur")); 


// pass only two arguments in apply second argument will be array where we can pass n arguments
console.log(obj1.fn.apply(obj2, ["agra", "jaipur"]));
 

// work same as apply in this case it will return us the function which we can later as per the need
const gotFunction = obj1.fn.bind(obj2, "agra", "jaipur")
gotFunction();


console.log(obj1.fn.bind(obj2, "agra", "jaipur")); // it will return the fn function defination itself

const check = obj1.fn.call(obj2, "agra", "jaipur");
console.log(check) // it will return the undefined as call does not return anything





// tried to access the function under the object when the function is declared outside the object
const obj3 = {
    firstName: "Aakash",
    "last Name": "Sharma",
}

const obj4 = {
    firstName: "Ajay",
    "last Name": "Sharma's",
}

function fn(name, otherName) {
        console.log(this.firstName + " " + this["last Name"] +" "+ name +" "+ otherName)
    }
    
 // directly apply call/apply/bind on the function itself    
    
console.log(fn.call(obj3, "Agra", "Jaipur")); 
console.log(fn.apply(obj3, ["Agra", "Jaipur"]));
const callAnywhere = fn.bind(obj3,"Agra","Jaipur");
console.log(callAnywhere());

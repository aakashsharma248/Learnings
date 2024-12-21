// We can change the key of object even declaring the object with the const keyword.
// Because we used to store the address corresponding to the object which didn't get changes while changing the key, addinng
// and deleting as well


const obj1 = {
    firstName: "Aakash",
    lastName: "Sharma",
    mobileNumber: 12234,
    address: {
        street1: "1 Main",
        street2: "Saharanpur"
    } 
}

obj1.designation = "Software Engineer"; // added a key in the object

console.log(obj1); // key will get added 


// Seal is the Object class function which prevents the object to add a key or delete a key you can just modify the existing key

Object.seal(obj1); 

obj1.studied = "MCA";  // it will not get added as we can't add a key after using seal method
obj1.designation = "Full Stack Developer"; // it will update the existing value since with seal we can modify the existing keys

console.log(obj1);


// Freeze is the Object class function which prevents the object to add, delete and even modify a key 
// we can't update the existing keys and cannot add the new keys
Object.freeze(obj1);

obj1.firstName = "New-Aakash"; // will not get updated
obj1.wearGoogles = false; // will not get added

console.log(obj1);